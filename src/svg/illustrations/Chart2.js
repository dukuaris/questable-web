import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

const Chart2 = ({ width = 250, height = 344 }) => {
  const theme = useTheme();
  const colorPaper = theme.palette.background.paper;
  const colorPrimaryMain = theme.palette.primary.main;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 250 344"
    >
      <rect
        width={width}
        height={height}
        fill={colorPrimaryMain}
        rx="12"
      ></rect>
      <path
        fill={colorPaper}
        d="M75.6 36V25.818h6.106v1.094h-4.873v3.44h4.415v1.094h-4.415V36H75.6zm10.142.16c-.69 0-1.294-.165-1.814-.493a3.344 3.344 0 01-1.213-1.377c-.289-.59-.433-1.28-.433-2.068 0-.796.144-1.49.433-2.084a3.337 3.337 0 011.213-1.382c.52-.328 1.125-.492 1.814-.492.69 0 1.293.164 1.81.492.52.328.925.79 1.213 1.383.292.593.438 1.287.438 2.083 0 .788-.146 1.478-.438 2.068a3.298 3.298 0 01-1.213 1.377c-.517.328-1.12.492-1.81.492zm0-1.055c.524 0 .955-.134 1.293-.403.338-.268.588-.621.75-1.058.163-.438.244-.912.244-1.422 0-.51-.081-.986-.243-1.427a2.404 2.404 0 00-.751-1.07c-.338-.27-.77-.407-1.293-.407-.523 0-.954.136-1.292.408a2.405 2.405 0 00-.751 1.069c-.162.44-.244.916-.244 1.427 0 .51.082.984.244 1.422.162.437.413.79.75 1.058.339.269.77.403 1.293.403zm4.794.895v-7.636h1.133v1.153h.08c.136-.378.386-.684.75-.92a2.233 2.233 0 011.239-.353c.212 0 .397.025.556.075.16.05.299.118.418.204l-.398.994a1.13 1.13 0 00-.293-.1 1.638 1.638 0 00-.383-.04c-.557 0-1.017.172-1.382.513a1.668 1.668 0 00-.547 1.278V36h-1.173zm10.642.179c-.484 0-.923-.091-1.317-.273a2.261 2.261 0 01-.94-.8c-.232-.352-.348-.776-.348-1.274 0-.437.086-.792.259-1.063.172-.276.402-.491.69-.647.289-.156.607-.272.955-.348.351-.08.704-.142 1.059-.189.464-.06.84-.104 1.129-.134.291-.033.503-.088.636-.164.136-.076.204-.209.204-.398v-.04c0-.49-.134-.871-.403-1.143-.265-.272-.668-.408-1.208-.408-.56 0-.999.123-1.317.368-.319.245-.542.507-.672.786l-1.113-.398c.199-.464.464-.825.795-1.084.335-.262.7-.444 1.094-.547.398-.106.789-.159 1.173-.159.246 0 .527.03.845.09.322.056.632.174.93.353.302.179.552.449.751.81.199.361.298.845.298 1.452V36h-1.173v-1.034h-.06a2.047 2.047 0 01-.398.532c-.185.189-.432.35-.74.482-.309.133-.685.199-1.129.199zm.179-1.054c.464 0 .855-.091 1.173-.273.322-.183.564-.418.726-.706.166-.289.249-.592.249-.91v-1.074c-.05.06-.159.114-.328.164a5.554 5.554 0 01-.577.124 26.387 26.387 0 01-1.124.15c-.304.04-.59.104-.855.193a1.47 1.47 0 00-.636.393c-.16.172-.239.408-.239.706 0 .408.151.716.453.925.305.205.691.308 1.158.308zm6.178-9.307V36h-1.173V25.818h1.173zm2.865 0V36h-1.173V25.818h1.173zm5.171 13.046v-10.5h1.133v1.213h.14a9.98 9.98 0 01.358-.507c.155-.21.377-.395.666-.557.291-.166.686-.249 1.183-.249.643 0 1.21.161 1.7.482.491.322.874.778 1.149 1.368.275.59.412 1.286.412 2.088 0 .808-.137 1.51-.412 2.103-.275.59-.656 1.047-1.144 1.372-.487.321-1.049.482-1.685.482-.491 0-.883-.081-1.178-.243a2.182 2.182 0 01-.681-.562 7.174 7.174 0 01-.368-.527h-.1v4.037h-1.173zm1.153-6.682c0 .865.188 1.57.562 2.113.378.54.92.81 1.626.81.49 0 .9-.13 1.228-.388.331-.261.58-.613.746-1.054.169-.444.253-.938.253-1.481 0-.537-.083-1.021-.248-1.452a2.25 2.25 0 00-.741-1.029c-.328-.255-.741-.383-1.238-.383-.716 0-1.26.264-1.631.79-.371.528-.557 1.219-.557 2.074zm10.122 3.977c-.736 0-1.37-.162-1.904-.487a3.27 3.27 0 01-1.228-1.372c-.285-.59-.427-1.276-.427-2.058 0-.783.142-1.472.427-2.069.288-.6.689-1.067 1.203-1.402.517-.338 1.12-.507 1.81-.507.398 0 .79.067 1.178.2.388.132.741.347 1.059.645.318.295.572.686.761 1.174.189.487.283 1.087.283 1.8v.497h-5.543c.026.815.257 1.44.691 1.874.437.434 1.001.651 1.69.651.461 0 .857-.1 1.188-.298.332-.199.572-.497.721-.895l1.134.318c-.179.577-.537 1.043-1.074 1.397-.537.355-1.193.532-1.969.532zm-2.381-4.594h4.35c0-.646-.189-1.181-.567-1.606-.378-.427-.885-.64-1.521-.64-.448 0-.835.104-1.163.312a2.244 2.244 0 00-.776.83c-.189.342-.297.71-.323 1.104zm6.87 4.435v-7.636h1.134v1.153h.079c.136-.378.386-.684.751-.92a2.234 2.234 0 011.238-.353c.212 0 .398.025.557.075.159.05.298.118.417.204l-.397.994a1.134 1.134 0 00-.294-.1 1.636 1.636 0 00-.383-.04c-.556 0-1.017.172-1.382.513a1.67 1.67 0 00-.546 1.278V36h-1.174zm4.916 0v-7.636h1.173V36h-1.173zm.596-8.91a.831.831 0 01-.591-.233.749.749 0 01-.244-.561c0-.22.081-.407.244-.562a.831.831 0 01.591-.234c.229 0 .424.078.587.234a.742.742 0 01.248.561.742.742 0 01-.248.562.818.818 0 01-.587.234zm5.37 9.07c-.689 0-1.294-.165-1.814-.493a3.34 3.34 0 01-1.213-1.377c-.289-.59-.433-1.28-.433-2.068 0-.796.144-1.49.433-2.084a3.333 3.333 0 011.213-1.382c.52-.328 1.125-.492 1.814-.492.69 0 1.293.164 1.81.492.52.328.925.79 1.213 1.383.292.593.438 1.287.438 2.083 0 .788-.146 1.478-.438 2.068a3.298 3.298 0 01-1.213 1.377c-.517.328-1.12.492-1.81.492zm0-1.055c.524 0 .955-.134 1.293-.403a2.38 2.38 0 00.751-1.058c.162-.438.243-.912.243-1.422 0-.51-.081-.986-.243-1.427a2.41 2.41 0 00-.751-1.07c-.338-.27-.769-.407-1.293-.407-.523 0-.954.136-1.292.408a2.41 2.41 0 00-.751 1.069c-.162.44-.244.916-.244 1.427 0 .51.082.984.244 1.422.163.437.413.79.751 1.058.338.269.769.403 1.292.403zm7.677 1.054c-.636 0-1.198-.16-1.685-.482-.487-.325-.868-.782-1.143-1.372-.275-.594-.413-1.295-.413-2.103 0-.802.138-1.498.413-2.088.275-.59.658-1.046 1.148-1.368.491-.321 1.057-.482 1.7-.482.498 0 .89.083 1.179.249.291.162.513.348.666.557.156.205.277.374.363.507h.099v-3.759h1.173V36h-1.133v-1.173h-.139a7.5 7.5 0 01-.368.527 2.182 2.182 0 01-.681.562c-.295.162-.688.243-1.179.243zm.16-1.054c.706 0 1.246-.27 1.62-.81.378-.544.567-1.248.567-2.113 0-.855-.186-1.546-.557-2.073-.371-.527-.915-.79-1.63-.79-.498 0-.912.127-1.243.382a2.295 2.295 0 00-.741 1.03 4.1 4.1 0 00-.244 1.45c0 .544.083 1.038.249 1.482.169.441.418.793.746 1.054.331.259.742.388 1.233.388z"
      ></path>
      <path
        fill={colorPaper}
        fillRule="evenodd"
        d="M170.775 28.475a.625.625 0 010 .884l-3.333 3.333a.625.625 0 01-.884 0l-3.333-3.333a.624.624 0 11.883-.884L167 31.366l2.891-2.891a.625.625 0 01.884 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill={colorPaper}
        fillOpacity="0.4"
        fillRule="evenodd"
        d="M125 70c41.421 0 75 33.579 75 75s-33.579 75-75 75-75-33.579-75-75 33.579-75 75-75zm0 16c-32.585 0-59 26.415-59 59s26.415 59 59 59 59-26.415 59-59-26.415-59-59-59z"
        clipRule="evenodd"
      ></path>
      <g fill={colorPaper} clipPath="url(#clip0)">
        <path d="M99.592 163v-4.653l10.873-10.068c1.392-1.332 2.451-2.491 3.177-3.475a5.42 5.42 0 001.089-3.296c0-1.343-.448-2.401-1.343-3.177-.885-.786-1.998-1.178-3.341-1.178-1.392 0-2.515.422-3.37 1.267-.846.836-1.263 1.984-1.253 3.446h-6.13c0-1.999.452-3.734 1.357-5.205.905-1.472 2.168-2.611 3.788-3.416 1.631-.805 3.515-1.208 5.653-1.208 2.188 0 4.092.388 5.712 1.163 1.631.766 2.899 1.83 3.804 3.192.905 1.352 1.357 2.913 1.357 4.683a8.997 8.997 0 01-.686 3.416c-.458 1.123-1.263 2.371-2.416 3.743-1.144 1.363-2.765 2.998-4.863 4.907l-4.459 4.37v.209h12.827V163H99.592zm36.373.418c-2.238 0-4.221-.383-5.951-1.149-1.731-.765-3.093-1.829-4.087-3.192-.994-1.362-1.511-2.933-1.551-4.713h6.503c.059 1.114.566 2.014 1.521 2.7.964.686 2.158 1.029 3.579 1.029 1.482 0 2.69-.378 3.625-1.133.944-.766 1.412-1.755 1.402-2.969.01-1.232-.492-2.237-1.507-3.012-1.004-.786-2.371-1.179-4.101-1.179h-2.849v-4.742h2.849c1.471 0 2.67-.368 3.594-1.104.925-.746 1.382-1.72 1.372-2.923.01-1.154-.387-2.089-1.193-2.804-.795-.716-1.844-1.074-3.147-1.074-1.322 0-2.451.348-3.385 1.044-.935.696-1.422 1.625-1.462 2.789h-6.19c.03-1.76.532-3.311 1.507-4.654.974-1.352 2.287-2.406 3.937-3.162 1.661-.755 3.535-1.133 5.623-1.133 2.108 0 3.952.383 5.533 1.148 1.581.766 2.809 1.8 3.684 3.103.885 1.292 1.323 2.744 1.313 4.355.01 1.71-.522 3.137-1.596 4.28-1.064 1.144-2.451 1.87-4.161 2.178v.238c2.247.279 3.957 1.054 5.13 2.327 1.184 1.273 1.77 2.859 1.76 4.758.01 1.74-.492 3.286-1.506 4.638-1.004 1.353-2.391 2.417-4.161 3.192-1.77.776-3.799 1.164-6.085 1.164zM156.193 129.818v-.613a2.71 2.71 0 01.279-1.205c.185-.367.454-.661.806-.881.353-.223.781-.335 1.284-.335.516 0 .947.11 1.296.33.352.219.617.513.795.88.178.368.267.771.267 1.211v.613c0 .436-.09.837-.272 1.205a2.177 2.177 0 01-.801.886c-.349.22-.777.33-1.285.33-.511 0-.943-.11-1.295-.33a2.177 2.177 0 01-.801-.886 2.789 2.789 0 01-.273-1.205zm-5.852-6.659v-.614c0-.439.093-.842.278-1.21.186-.367.455-.661.807-.88.352-.22.78-.33 1.284-.33.515 0 .947.11 1.296.33.348.219.611.513.789.88.182.368.271.771.267 1.21v.614c.004.439-.085.843-.267 1.21a2.126 2.126 0 01-.801.881c-.348.22-.776.33-1.284.33-.511 0-.943-.11-1.295-.33a2.17 2.17 0 01-.801-.886 2.678 2.678 0 01-.273-1.205zm.477 8.841l8-11.636h1.358l-8 11.636h-1.358zm6.699-2.795v.613c.004.322.081.618.233.887.155.265.426.397.812.397.383 0 .65-.132.802-.397.151-.266.227-.561.227-.887v-.613c0-.326-.074-.622-.222-.887-.144-.265-.413-.398-.807-.398-.378 0-.647.133-.806.398a1.76 1.76 0 00-.239.887zm-5.847-6.66v.614c0 .326.076.621.228.886.155.266.426.398.812.398.383 0 .65-.132.801-.398.152-.265.228-.56.228-.886v-.614c0-.325-.074-.621-.222-.886-.144-.265-.413-.398-.807-.398-.379 0-.647.133-.807.398a1.724 1.724 0 00-.233.886z"></path>
      </g>
      <path
        stroke={colorPaper}
        strokeLinecap="round"
        strokeWidth="16"
        d="M191.91 146.08c.646-36.998-28.823-67.514-65.82-68.16"
      ></path>
      <path
        fill={colorPaper}
        d="M55.101 242.273h-1.423l3.14 8.727h1.522l3.14-8.727h-1.423l-2.429 7.108h-.098l-2.429-7.108zM62.246 251h1.275v-6.545h-1.275V251zm.644-7.555c.439 0 .805-.341.805-.759s-.366-.763-.805-.763c-.443 0-.806.345-.806.763 0 .418.363.759.806.759zm4.403 7.683c1.193 0 1.662-.729 1.892-1.146h.106V251h1.245v-8.727H69.26v3.243h-.076c-.23-.405-.665-1.147-1.884-1.147-1.58 0-2.744 1.249-2.744 3.371 0 2.118 1.146 3.388 2.736 3.388zm.28-1.087c-1.137 0-1.73-1.001-1.73-2.314 0-1.299.58-2.275 1.73-2.275 1.113 0 1.71.907 1.71 2.275 0 1.377-.61 2.314-1.71 2.314zm7.21 1.091c1.427 0 2.437-.703 2.727-1.768l-1.206-.218c-.23.618-.784.934-1.508.934-1.091 0-1.824-.708-1.858-1.969h4.653v-.452c0-2.365-1.415-3.29-2.898-3.29-1.823 0-3.025 1.39-3.025 3.401 0 2.033 1.184 3.362 3.115 3.362zm-1.841-3.976c.051-.929.724-1.734 1.76-1.734.989 0 1.636.733 1.64 1.734h-3.4zm8.428 3.976c1.845 0 3.05-1.351 3.05-3.375 0-2.037-1.205-3.388-3.05-3.388-1.846 0-3.052 1.351-3.052 3.388 0 2.024 1.206 3.375 3.052 3.375zm.004-1.07c-1.206 0-1.769-1.052-1.769-2.309 0-1.253.563-2.318 1.769-2.318 1.197 0 1.76 1.065 1.76 2.318 0 1.257-.563 2.309-1.76 2.309zm9.31 1.066c1.194 0 1.662-.729 1.892-1.146h.107V251h1.244v-8.727h-1.274v3.243h-.077c-.23-.405-.664-1.147-1.883-1.147-1.581 0-2.744 1.249-2.744 3.371 0 2.118 1.146 3.388 2.735 3.388zm.282-1.087c-1.138 0-1.73-1.001-1.73-2.314 0-1.299.58-2.275 1.73-2.275 1.112 0 1.708.907 1.708 2.275 0 1.377-.609 2.314-1.708 2.314zm7.145 1.091c1.845 0 3.051-1.351 3.051-3.375 0-2.037-1.206-3.388-3.051-3.388-1.846 0-3.052 1.351-3.052 3.388 0 2.024 1.206 3.375 3.052 3.375zm.004-1.07c-1.206 0-1.769-1.052-1.769-2.309 0-1.253.563-2.318 1.769-2.318 1.197 0 1.76 1.065 1.76 2.318 0 1.257-.563 2.309-1.76 2.309zm5.296.938h1.296l1.329-4.726h.098l1.33 4.726h1.3l1.922-6.545h-1.317l-1.274 4.785h-.064l-1.279-4.785h-1.316l-1.287 4.806h-.064l-1.283-4.806h-1.317l1.926 6.545zm9.366-3.886c0-1.044.639-1.641 1.525-1.641.865 0 1.389.567 1.389 1.517V251h1.275v-4.163c0-1.62-.891-2.468-2.229-2.468-.985 0-1.628.456-1.931 1.151h-.081v-1.065h-1.223V251h1.275v-3.886zm6.779-4.841h-1.274V251h1.274v-8.727zm4.079 8.859c1.845 0 3.051-1.351 3.051-3.375 0-2.037-1.206-3.388-3.051-3.388-1.845 0-3.051 1.351-3.051 3.388 0 2.024 1.206 3.375 3.051 3.375zm.004-1.07c-1.206 0-1.768-1.052-1.768-2.309 0-1.253.562-2.318 1.768-2.318 1.198 0 1.76 1.065 1.76 2.318 0 1.257-.562 2.309-1.76 2.309zm5.982 1.083c1.082 0 1.692-.55 1.935-1.04h.051V251h1.244v-4.347c0-1.904-1.5-2.284-2.54-2.284-1.184 0-2.275.478-2.701 1.671l1.197.272c.188-.464.665-.911 1.521-.911.823 0 1.245.43 1.245 1.171v.03c0 .465-.478.456-1.654.593-1.24.144-2.51.468-2.51 1.956 0 1.287.968 1.994 2.212 1.994zm.277-1.023c-.72 0-1.24-.324-1.24-.954 0-.682.605-.925 1.342-1.023.414-.056 1.394-.166 1.577-.35v.844c0 .776-.618 1.483-1.679 1.483zm6.708 1.006c1.193 0 1.662-.729 1.892-1.146h.107V251h1.244v-8.727h-1.274v3.243h-.077c-.23-.405-.665-1.147-1.883-1.147-1.581 0-2.745 1.249-2.745 3.371 0 2.118 1.147 3.388 2.736 3.388zm.281-1.087c-1.137 0-1.73-1.001-1.73-2.314 0-1.299.58-2.275 1.73-2.275 1.113 0 1.709.907 1.709 2.275 0 1.377-.609 2.314-1.709 2.314zm7.209 1.091c1.428 0 2.438-.703 2.728-1.768l-1.206-.218c-.23.618-.784.934-1.509.934-1.091 0-1.824-.708-1.858-1.969h4.654v-.452c0-2.365-1.415-3.29-2.898-3.29-1.824 0-3.026 1.39-3.026 3.401 0 2.033 1.185 3.362 3.115 3.362zm-1.841-3.976c.052-.929.725-1.734 1.76-1.734.989 0 1.637.733 1.641 1.734h-3.401zm8.121 3.972c1.193 0 1.662-.729 1.892-1.146h.107V251h1.244v-8.727h-1.274v3.243h-.077c-.23-.405-.664-1.147-1.883-1.147-1.581 0-2.745 1.249-2.745 3.371 0 2.118 1.147 3.388 2.736 3.388zm.282-1.087c-1.138 0-1.731-1.001-1.731-2.314 0-1.299.58-2.275 1.731-2.275 1.112 0 1.708.907 1.708 2.275 0 1.377-.609 2.314-1.708 2.314zm9.928 1.091c1.845 0 3.051-1.351 3.051-3.375 0-2.037-1.206-3.388-3.051-3.388-1.845 0-3.051 1.351-3.051 3.388 0 2.024 1.206 3.375 3.051 3.375zm.004-1.07c-1.206 0-1.768-1.052-1.768-2.309 0-1.253.562-2.318 1.768-2.318 1.198 0 1.76 1.065 1.76 2.318 0 1.257-.562 2.309-1.76 2.309zm5.351-2.948c0-1.044.639-1.641 1.526-1.641.865 0 1.389.567 1.389 1.517V251h1.274v-4.163c0-1.62-.891-2.468-2.229-2.468-.984 0-1.627.456-1.93 1.151h-.081v-1.065h-1.223V251h1.274v-3.886zm8.272 3.886h5.744v-1.129h-3.929v-.064l1.735-1.816c1.598-1.615 2.054-2.386 2.054-3.362 0-1.402-1.142-2.476-2.787-2.476-1.632 0-2.826 1.057-2.826 2.651h1.258c-.005-.938.6-1.551 1.542-1.551.887 0 1.56.545 1.56 1.415 0 .771-.46 1.325-1.398 2.318l-2.953 3.059V251zm10.005.119c1.782 0 3.09-1.065 3.086-2.514.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.504-.951 1.5-1.931.004-1.282-1.048-2.378-2.727-2.378-1.603 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.891 0 1.475.541 1.471 1.346.004.844-.674 1.398-1.641 1.398h-.737v1.074h.737c1.21 0 1.909.614 1.909 1.491 0 .849-.737 1.424-1.764 1.424-.946 0-1.683-.486-1.734-1.262h-1.339c.056 1.424 1.317 2.395 3.081 2.395zm8.86-1.755c.004.984.622 1.815 1.777 1.815 1.142 0 1.768-.831 1.768-1.815v-.461c0-.988-.609-1.815-1.768-1.815-1.138 0-1.773.831-1.777 1.815v.461zm-4.39-4.995c0 .985.623 1.816 1.777 1.816 1.138 0 1.769-.827 1.765-1.816v-.46c.004-.989-.61-1.815-1.765-1.815-1.133 0-1.777.826-1.777 1.815v.46zm.358 6.631h1.019l6-8.727h-1.019l-6 8.727zm5.024-2.097c.005-.49.218-.963.785-.963.588 0 .771.473.771.963v.461c0 .49-.2.963-.771.963-.58 0-.78-.478-.785-.963v-.461zm-4.384-4.994c0-.486.213-.963.779-.963.588 0 .772.473.772.963v.46c0 .49-.201.963-.772.963-.579 0-.779-.473-.779-.963v-.46z"
      ></path>
      <rect
        width="100"
        height="40"
        x="75"
        y="269"
        fill={colorPaper}
        rx="12"
      ></rect>
      <path
        fill={colorPrimaryMain}
        d="M95.898 286.493a1.453 1.453 0 00-.656-1.094c-.385-.262-.868-.393-1.452-.393-.417 0-.779.067-1.084.199-.305.13-.541.308-.71.537a1.268 1.268 0 00-.25.771c0 .242.057.451.17.626.116.176.267.323.452.443.19.116.391.213.607.293.215.076.422.139.621.189l.995.258c.324.08.658.188.999.324.341.135.658.314.95.537.291.222.526.497.706.825.182.328.273.721.273 1.178 0 .577-.15 1.089-.448 1.536-.294.448-.724.801-1.287 1.059-.56.259-1.238.388-2.034.388-.762 0-1.421-.121-1.978-.363-.557-.242-.993-.585-1.308-1.029-.315-.447-.489-.978-.522-1.591h1.541c.03.368.15.675.358.92.213.242.483.422.81.542.332.116.695.174 1.09.174.434 0 .82-.068 1.158-.204.341-.139.61-.332.805-.577.196-.248.294-.538.294-.87 0-.301-.087-.548-.259-.741-.169-.192-.4-.351-.691-.477a6.73 6.73 0 00-.98-.333l-1.203-.328c-.815-.222-1.461-.549-1.938-.98-.474-.43-.711-1-.711-1.71 0-.586.159-1.098.477-1.536a3.138 3.138 0 011.293-1.019c.543-.245 1.156-.368 1.839-.368.69 0 1.298.121 1.825.363.53.242.947.575 1.252.999.305.421.464.905.478 1.452h-1.482zm4.366 2.973V294h-1.486v-10.182h1.466v3.789h.095c.179-.411.452-.738.82-.98.368-.242.849-.363 1.442-.363.523 0 .981.108 1.372.323.394.216.699.537.915.965.218.424.328.954.328 1.591V294h-1.487v-4.678c0-.56-.144-.995-.432-1.303-.289-.311-.69-.467-1.203-.467-.352 0-.667.074-.945.224a1.607 1.607 0 00-.651.656c-.156.285-.234.63-.234 1.034zm9.694 4.688c-.715 0-1.34-.164-1.874-.492a3.322 3.322 0 01-1.243-1.377c-.295-.59-.442-1.28-.442-2.068 0-.793.147-1.485.442-2.079a3.323 3.323 0 011.243-1.382c.534-.328 1.159-.492 1.874-.492.716 0 1.341.164 1.875.492.533.329.948.789 1.243 1.382.295.594.442 1.286.442 2.079 0 .788-.147 1.478-.442 2.068a3.322 3.322 0 01-1.243 1.377c-.534.328-1.159.492-1.875.492zm.005-1.248c.464 0 .849-.122 1.154-.368.305-.245.53-.571.676-.979a3.9 3.9 0 00.224-1.347c0-.488-.075-.935-.224-1.343a2.188 2.188 0 00-.676-.989c-.305-.249-.69-.373-1.154-.373-.467 0-.855.124-1.163.373a2.22 2.22 0 00-.681.989 3.958 3.958 0 00-.219 1.343c0 .49.073.939.219 1.347.149.408.376.734.681.979.308.246.696.368 1.163.368zm6.18 1.094l-2.247-7.636h1.536l1.496 5.608h.075l1.501-5.608h1.537l1.491 5.583h.075l1.486-5.583h1.536L122.387 294h-1.516l-1.551-5.513h-.115L117.654 294h-1.511zm12.806-10.182h1.864l3.242 7.915h.119l3.242-7.915h1.864V294h-1.462v-7.368h-.094l-3.003 7.353h-1.213l-3.003-7.358h-.094V294h-1.462v-10.182zm15.204 10.336c-.716 0-1.341-.164-1.874-.492a3.315 3.315 0 01-1.243-1.377c-.295-.59-.443-1.28-.443-2.068 0-.793.148-1.485.443-2.079a3.317 3.317 0 011.243-1.382c.533-.328 1.158-.492 1.874-.492.716 0 1.341.164 1.874.492.534.329.948.789 1.243 1.382.295.594.443 1.286.443 2.079 0 .788-.148 1.478-.443 2.068a3.315 3.315 0 01-1.243 1.377c-.533.328-1.158.492-1.874.492zm.005-1.248c.464 0 .849-.122 1.153-.368.305-.245.531-.571.677-.979a3.9 3.9 0 00.223-1.347c0-.488-.074-.935-.223-1.343a2.19 2.19 0 00-.677-.989c-.304-.249-.689-.373-1.153-.373-.467 0-.855.124-1.163.373a2.22 2.22 0 00-.681.989 3.958 3.958 0 00-.219 1.343c0 .49.073.939.219 1.347.149.408.376.734.681.979.308.246.696.368 1.163.368zm4.756 1.094v-7.636h1.437v1.213h.08c.139-.411.384-.734.735-.97a2.113 2.113 0 011.204-.358 7.192 7.192 0 01.631.035v1.422a2.609 2.609 0 00-.318-.055 3.071 3.071 0 00-.458-.035 1.94 1.94 0 00-.939.224 1.67 1.67 0 00-.647.612 1.652 1.652 0 00-.238.885V294h-1.487zm7.933.154c-.752 0-1.4-.161-1.943-.482a3.271 3.271 0 01-1.253-1.367c-.292-.59-.438-1.281-.438-2.073 0-.783.146-1.472.438-2.069a3.403 3.403 0 011.233-1.397c.53-.334 1.15-.502 1.859-.502.431 0 .848.071 1.253.214.404.143.767.366 1.089.671.321.305.575.701.76 1.188.186.484.279 1.073.279 1.765v.527h-6.071v-1.113h4.614c0-.391-.08-.738-.239-1.039a1.794 1.794 0 00-.671-.721 1.873 1.873 0 00-1.004-.264c-.418 0-.782.103-1.094.308a2.079 2.079 0 00-.716.796 2.306 2.306 0 00-.248 1.059v.87c0 .51.089.944.268 1.302.182.358.436.632.761.821a2.26 2.26 0 001.138.278c.282 0 .539-.04.771-.119a1.67 1.67 0 00.601-.368c.17-.162.299-.363.388-.602l1.407.254a2.552 2.552 0 01-.606 1.089 2.961 2.961 0 01-1.089.721c-.434.169-.93.253-1.487.253z"
      ></path>
      <defs>
        <clipPath id="clip0">
          <path
            fill={colorPaper}
            d="M0 0H65V57H0z"
            transform="translate(97 117)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

Chart2.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Chart2;
