'use strict';

const ORG_NAME = 'relaycorp';
const DESKTOP_GW_REPO = `awala-gateway-desktop`;
const ANDROID_GW_REPO = `relaynet-gateway-android`;
const DESKTOP_GW_RELEASE_ASSET_PREFIX =
    `https://github.com/${ORG_NAME}/${DESKTOP_GW_REPO}/releases/download`;
const DESKTOP_PING_URL = 'https://www.npmjs.com/package/@relaycorp/awala-ping';

const downloadSection = $('.rn-gw-download');

document.addEventListener('DOMContentLoaded', async () => {
    const templateResponse = await fetch('/assets/templates/gw-download.mustache');
    const releaseData = await getReleaseData();
    downloadSection.html(Mustache.render(await templateResponse.text(), releaseData));

    setActiveOS(getCurrentOS());
});

async function getReleaseData() {
    const desktopRelease = await fetchLatestRepoRelease(DESKTOP_GW_REPO);

    const desktopVersion = desktopRelease['tag_name'].replace(/^v/, '');
    const linuxDownloadURL =
        `${DESKTOP_GW_RELEASE_ASSET_PREFIX}/v${desktopVersion}/Awala-${desktopVersion}.AppImage`;
    const macosDownloadURL =
        `${DESKTOP_GW_RELEASE_ASSET_PREFIX}/v${desktopVersion}/Awala-${desktopVersion}.dmg`;
    const windowsDownloadURL =
        `${DESKTOP_GW_RELEASE_ASSET_PREFIX}/v${desktopVersion}/Awala.Setup.${desktopVersion}.exe`;
    return {
        android: {
            githubRepoName: `${ORG_NAME}/${ANDROID_GW_REPO}`,
            githubRepoURL: `https://github.com/${ORG_NAME}/${ANDROID_GW_REPO}`,
        },
        desktop: {
            githubRepoName: `${ORG_NAME}/${DESKTOP_GW_REPO}`,
            githubRepoURL: `https://github.com/${ORG_NAME}/${DESKTOP_GW_REPO}`,
            linuxDownloadURL,
            macosDownloadURL,
            windowsDownloadURL,
            version: desktopVersion,
            pingURL: DESKTOP_PING_URL,
        }
    };
}

async function fetchLatestRepoRelease(repoName) {
    const latestReleaseURL = `https://api.github.com/repos/${ORG_NAME}/${repoName}/releases/latest`;
    const releaseDataResponse = await fetch(latestReleaseURL);

    if (!releaseDataResponse.ok) {
        throw new Error(
            `Failed to retrieve release data for ${repoName}: ${releaseDataResponse.statusText}`,
        );
    }

    return await releaseDataResponse.json();
}

function getCurrentOS() {
    let osName;
    if (navigator.userAgent.match(/android/i)) {
        osName = 'android';
    } else if (navigator.userAgent.match(/linux/i)) {
        osName = 'linux';
    } else if (navigator.userAgent.match(/macintosh/i)) {
        osName = 'macos';
    } else {
        osName = 'windows';
    }
    return osName;
}

function setActiveOS(osName) {
    downloadSection.trigger(new CustomEvent('setActiveOS', { detail: osName }));
}

downloadSection.on('setActiveOS', (event) => {
    const osName = event.detail;

    // Deactivate previous OS (if any)
    $('.os-selector li').removeClass('is-active');
    $('.os-body > div').addClass('is-hidden');

    $(`.os-selector li.${osName}`).addClass('is-active');
    $(`.os-body .${osName}`).removeClass('is-hidden');
});
