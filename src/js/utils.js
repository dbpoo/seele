const isMobile = () => {
  let sUserAgent = navigator.userAgent.toLowerCase();
  if (
    /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(
      sUserAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export { isMobile };
