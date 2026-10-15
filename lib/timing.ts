// Loader timeline in seconds.
export const T = {
  fade: 0.3,     // ball fades in at the top
  fall: 0.45,    // ball falls to the centre
  bounce: 0.4,   // the single bounce at the centre
  hop: 0.45,     // one hop from the bounce onto the yellow part of the K
  hops: 1,       // keep at 1: no random hops, the ball goes straight to the K
  splash: 0.4,   // yellow splash fills the K's yellow slab
  fadeK: 0.4,    // rest of the K fades in
  hold: 0.2,     // pause on the finished K
  collapse: 0.6, // loader slides up into the nav bar
};

export const LAND_AT = T.fade + T.fall + T.bounce + T.hop * T.hops;
export const COLLAPSE_AT = LAND_AT + 0.15 + T.fadeK + T.hold;
export const END_AT = COLLAPSE_AT + T.collapse;
/** Hero text starts just after the collapse begins. */
export const REVEAL_AT = COLLAPSE_AT + 0.15;