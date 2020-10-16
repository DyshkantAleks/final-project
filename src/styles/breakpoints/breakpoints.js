const size = { mobile: '320px', tabletS: '481px', tabletM: '768px', tabletL: '991px', desktop: '1200px' };

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tabletS: `(min-width: ${size.tabletS})`,
    tabletM: `(min-width: ${size.tabletM})`,
    tabletL: `(min-width: ${size.tabletL})`,
    desktop: `(min-width: ${size.desktop})`
};