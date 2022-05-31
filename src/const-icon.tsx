import React from 'react'
import { Icon, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill-rule="evenodd">
    <path d="M57.2606061,23 C61.3776378,23 64.7151515,26.3362007 64.7151515,30.4516129 C64.7151515,34.4863307 61.5072376,37.7720948 57.501866,37.8993971 L57.2606061,37.9032258 L32.9090909,37.9032258 L32.9090909,162.096774 L57.2606061,162.096774 C61.3776378,162.096774 64.7151515,165.432975 64.7151515,169.548387 C64.7151515,173.583105 61.5072376,176.868869 57.501866,176.996171 L57.2606061,177 L25.4545455,177 C21.3375137,177 18,173.663799 18,169.548387 L18,30.4516129 C18,26.3362007 21.3375137,23 25.4545455,23 L57.2606061,23 Z M142.739394,177 C138.622362,177 135.284848,173.663799 135.284848,169.548387 C135.284848,165.513669 138.492762,162.227905 142.498134,162.100603 L142.739394,162.096774 L167.090909,162.096774 L167.090909,37.9032258 L142.739394,37.9032258 C138.622362,37.9032258 135.284848,34.5670251 135.284848,30.4516129 C135.284848,26.4168951 138.492762,23.131131 142.498134,23.0038287 L142.739394,23 L174.545455,23 C178.58176,23 181.868817,26.206652 181.99617,30.2104479 L182,30.4516129 L182,169.548387 C182,173.583105 178.792086,176.868869 174.786715,176.996171 L174.545455,177 L142.739394,177 Z M99.5541973,59.8629968 C104.534463,64.3020986 107.7507,70.5283785 110.188672,79.6202002 L134.545972,55.8132657 C137.489677,52.9361085 142.209336,52.9891175 145.087625,55.9316647 C147.903343,58.8102434 147.913805,63.3877315 145.157062,66.2789584 L144.96918,66.4691716 L113.623927,97.1048 L113.838676,98.5468307 L114.305042,101.804988 L115.105865,107.572948 L115.497813,110.334785 L115.811147,112.456703 L116.107116,114.366288 L116.32091,115.675864 L116.530194,116.893383 L116.668324,117.659714 L116.875097,118.749879 L117.000999,119.380261 C117.1484,120.103703 117.297949,120.786908 117.453229,121.448542 L117.538971,121.808255 L117.711188,122.49806 L117.883768,123.147998 C117.912521,123.252974 117.941258,123.35627 117.969964,123.457877 L118.141704,124.047176 L118.311962,124.595491 L118.479998,125.102374 L118.645075,125.567378 C118.672301,125.641364 118.699372,125.713586 118.726274,125.784036 L118.885528,126.185384 L119.039977,126.543736 C119.267679,127.048794 119.476672,127.407232 119.655746,127.61226 C123.310887,131.797172 129.244818,133.290528 138.448432,131.649348 C142.50148,130.926613 146.373247,133.625071 147.096267,137.676524 C147.819287,141.727977 145.119767,145.598222 141.066719,146.320957 C127.122778,148.807428 115.911825,145.986035 108.424753,137.413799 L108.267145,137.231147 L107.959364,136.861005 L107.661229,136.483781 L107.372418,136.098719 C107.23029,135.904102 107.091539,135.706262 106.955984,135.504773 L106.689082,135.096805 C106.6015,134.95911 106.515284,134.819668 106.430383,134.678351 L106.179565,134.248655 C106.138401,134.17606 106.097552,134.102965 106.057011,134.029354 L105.817415,133.581375 L105.584898,133.120263 L105.359141,132.64526 C105.32206,132.564893 105.285248,132.483916 105.248697,132.402313 L105.032478,131.905056 C104.996947,131.820886 104.961664,131.736058 104.926623,131.650557 L104.719221,131.129344 L104.517295,130.591215 L104.320526,130.035413 L104.128592,129.461182 C104.096988,129.363899 104.065572,129.265817 104.034338,129.16692 L103.849057,128.563626 C103.818521,128.461405 103.788154,128.358337 103.757949,128.254407 L103.578598,127.620349 L103.4028,126.964836 L103.230234,126.287112 L102.976745,125.227223 L102.810857,124.49066 L102.565882,123.338967 L102.324573,122.128788 L102.085846,120.857568 L101.848621,119.522756 L101.611815,118.121797 L101.374345,116.652139 L101.054816,114.581316 L100.811591,112.94143 L100.39619,110.035449 L65.4540284,144.186734 C62.5103232,147.063891 57.790664,147.010882 54.9123745,144.068335 C52.0966565,141.189757 52.0861946,136.612269 54.842938,133.721042 L55.0308201,133.530828 L97.6329245,91.891863 L97.4090019,90.7306593 L97.181946,89.6022902 L96.9516437,88.5065597 L96.717982,87.443272 C96.6395223,87.094228 96.5604839,86.7505586 96.4808478,86.4122309 L96.2401278,85.4132407 L95.995709,84.4461053 L95.7474784,83.5106288 C95.7057826,83.3573434 95.6639234,83.205369 95.6218982,83.0547014 L95.3677376,82.1663459 C95.3250394,82.0208895 95.2821706,81.8767318 95.2391288,81.7338687 L94.9787837,80.8921932 C94.9350406,80.7544924 94.8911198,80.6180779 94.847019,80.4829459 L94.5802349,79.6875096 C93.1456629,75.5269067 91.521905,72.6711013 89.6317421,70.9863267 C84.1809937,66.127866 77.9112706,66.5068087 69.1011807,73.5229859 L68.4356339,74.0616659 C67.9887247,74.4291115 67.535357,74.8132378 67.0753156,75.2142196 L66.3802214,75.8283559 C66.2635291,75.9328262 66.1464131,76.0383554 66.0288699,76.1449463 L65.3184573,76.7972536 C62.30336,79.5995664 57.5865234,79.4280321 54.7831077,76.4141209 C51.9796921,73.4002098 52.151294,68.6852287 55.1663912,65.8829159 C71.0663667,51.1050494 86.7068275,48.4116441 99.5541973,59.8629968 Z" fill="currentColor" fill-rule="nonzero"></path>
  </g>
</svg>
`

export function ConstIcon(props: PackedIconProps) {
  return <Icon {...props} type="_CONST" src={ICON} />
}       