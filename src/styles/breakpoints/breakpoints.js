const size = {mobileS: '320px', tablet: '481px', tabletL: '991px', desktop: '1200px'};

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    tabletL: `(min-width: ${size.tabletL})`,
    desktop: `(min-width: ${size.desktop})`
};