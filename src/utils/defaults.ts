export const COMPODOC_DEFAULTS = {
    title: 'Application documentation',
    additionalEntryName: 'Additional documentation',
    additionalEntryPath: 'additional-documentation',
    folder: './documentation/',
    port: 8080,
    theme: 'gitbook',
    exportFormat: 'html',
    exportFormatsSupported: ['html', 'json'],
    base: '/',
    defaultCoverageThreshold: 70,
    defaultCoverageMinimumPerFile: 0,
    coverageTestThresholdFail: true,
    toggleMenuItems: ['all'],
    navTabConfig: [],
    disableSourceCode: false,
    disableDomTree: false,
    disableTemplateTab: false,
    disableGraph: false,
    disableMainGraph: false,
    disableCoverage: false,
    disablePrivate: false,
    disableProtected: false,
    disableInternal: false,
    disableLifeCycleHooks: false,
    disableRoutesGraph: false,
    PAGE_TYPES: {
        ROOT: 'root',
        INTERNAL: 'internal'
    },
    gaSite: 'auto',
    locales: 'en'
};
