module.exports = {
  packagerConfig: {
    icon: './icons/icon.ico' // no file extension required
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: '.icons/icon.png',
        },
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
