import React from 'react'
import MyDesktop from '../MyHelperCompnents/MyDesktop'

import './Footer.css'

export const Footer = () => {
    return (
        <MyDesktop>
            <div className="footer__body">
                <hr className="breaker"></hr>
                <div className="show__components">
                    <div className="aid__component">
                        <svg className="icon" width="55" height="71" viewBox="0 0 63 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.542 56.8H63V7.1C63 3.18435 59.8605 0 56 0H10.5C6.279 0 0 2.83645 0 10.65V60.35C0 68.1636 6.279 71 10.5 71H63V63.9H10.542C8.925 63.8574 7 63.2113 7 60.35C7 57.4887 8.925 56.8426 10.542 56.8ZM17.5 24.85H28V14.2H35V24.85H45.5V31.95H35V42.6H28V31.95H17.5V24.85Z" fill="#8750A9" />
                        </svg>
                        <div className="heading">
                            Learning Aid
                        </div>
                        <div className="description">
                            Organised resources for easy Learning.
                        </div>
                    </div>
                    <hr className="component__divider"></hr>
                    <div className="bite__component">
                        <svg className="icon" width="55" height="71" viewBox="0 0 62 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.3087 0C37.6499 0 39.8951 0.930004 41.5505 2.58542C43.2059 4.24084 44.1359 6.48607 44.1359 8.82719L44.1315 9.07435H57.3767C58.5473 9.07435 59.6699 9.53935 60.4976 10.3671C61.3253 11.1948 61.7903 12.3174 61.7903 13.4879L61.7859 26.4816H57.3767C55.1497 26.4809 53.0047 27.3219 51.3718 28.8362C49.7389 30.3505 48.7386 32.426 48.5716 34.6467L48.5495 35.3088C48.5488 37.5357 49.3899 39.6807 50.9042 41.3137C52.4184 42.9466 54.4939 43.9468 56.7147 44.1139L57.3767 44.1359L61.7859 44.1315L61.7903 57.6239C61.7903 58.7944 61.3253 59.917 60.4976 60.7448C59.6699 61.5725 58.5473 62.0375 57.3767 62.0375H44.1227L44.1139 62.4479C43.9607 64.7161 42.9384 66.8377 41.2599 68.3708C39.5815 69.904 37.3762 70.7305 35.1035 70.6781C32.8308 70.6258 30.6659 69.6987 29.0598 68.0899C27.4537 66.4811 26.5301 64.3147 26.4816 62.0419H13.2408C12.0702 62.0419 10.9476 61.5769 10.1199 60.7492C9.29219 59.9215 8.82719 58.7989 8.82719 57.6283V44.1359C6.48607 44.1359 4.24084 43.2059 2.58542 41.5505C0.930004 39.8951 0 37.6499 0 35.3088C0 32.9676 0.930004 30.7224 2.58542 29.067C4.24084 27.4116 6.48607 26.4816 8.82719 26.4816V13.4879C8.82719 12.3174 9.29219 11.1948 10.1199 10.3671C10.9476 9.53935 12.0702 9.07435 13.2408 9.07435H26.4771L26.4816 8.82719C26.4816 6.48607 27.4116 4.24084 29.067 2.58542C30.7224 0.930004 32.9676 0 35.3087 0Z" fill="#8750A9" />
                        </svg>
                        <svg className="icon2" width="60" height="65" viewBox="0 0 74 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.492479 27.4197C0.638815 29.754 1.58905 31.9669 3.18312 33.6855C4.77719 35.4041 6.91767 36.5234 9.24398 36.8549L9.49358 36.8881L9.4216 48.2428L9.44924 48.8984C9.60232 50.5771 10.3782 52.1389 11.6255 53.2792C12.8728 54.4195 14.5021 55.0566 16.1958 55.0662L26.4782 55.1404L26.5038 55.3982C26.8254 57.8359 28.0234 60.0752 29.876 61.7017C31.7286 63.3282 34.1104 64.2317 36.5807 64.2451L37.2803 64.227C39.6258 64.0815 41.8491 63.1359 43.5758 61.5495C45.3025 59.9631 46.4271 57.8329 46.76 55.5176L46.7843 55.2646L57.0759 55.3299L57.7301 55.2979C59.416 55.1457 60.9846 54.3742 62.1302 53.1339C63.2758 51.8935 63.9163 50.273 63.9269 48.5883L63.9846 39.4847L64.2346 39.4591C66.684 39.1403 68.9343 37.9493 70.5692 36.1064C72.2042 34.2635 73.113 31.8936 73.1276 29.4352L73.1093 28.7389C72.963 26.4046 72.0128 24.1917 70.4187 22.4731C68.8246 20.7545 66.6841 19.6352 64.3578 19.3037L64.1127 19.2796L64.1848 7.90686C64.1962 6.10863 63.4894 4.3795 62.2198 3.09986C60.9503 1.82022 59.222 1.09489 57.4152 1.08343L42.65 0.998879L42.6043 8.9137L42.5781 9.46954C42.4334 10.8665 41.7694 12.1592 40.7166 13.0942C39.6637 14.0291 38.2978 14.5388 36.8868 14.5234L36.3283 14.4972C34.9247 14.3542 33.6253 13.6945 32.685 12.6474C31.7447 11.6003 31.2313 10.2414 31.2455 8.83718L31.2911 0.926875L16.5441 0.824353L15.8854 0.851817C14.1987 1.00294 12.629 1.77392 11.4825 3.01438C10.3359 4.25486 9.69479 5.87589 9.68402 7.56138L9.62623 16.6785L9.37175 16.6995C6.92158 17.0174 4.67015 18.208 3.03429 20.0509C1.39842 21.8939 0.488927 24.2643 0.474183 26.7235L0.492479 27.4197ZM5.01591 26.7523C5.03569 23.6334 7.5951 21.1182 10.7289 21.1381L14.1352 21.1596L14.2303 7.59019L14.2692 7.18361C14.3682 6.66388 14.6472 6.19518 15.0576 5.85913C15.4681 5.52308 15.984 5.34096 16.5155 5.34451L26.7162 5.41821L26.6992 8.81288C26.6824 11.3667 27.6315 13.8333 29.3581 15.7227C31.0846 17.6122 33.4621 18.786 36.0181 19.0111L36.7673 19.0429C42.1902 19.0773 46.6397 15.0282 47.1045 9.76945L47.141 9.02835L47.154 5.54325L57.391 5.60814C57.9933 5.61196 58.5694 5.85374 58.9926 6.28028C59.4158 6.70683 59.6514 7.2832 59.6476 7.88261L59.5382 23.7076L62.9446 23.7157C64.4502 23.7258 65.8902 24.3308 66.9478 25.3976C68.0053 26.4644 68.5937 27.9056 68.5836 29.4041C68.5735 30.9026 67.9657 32.3357 66.8939 33.3882C65.8221 34.4406 64.3741 35.0262 62.8684 35.016L59.4665 35.0125L59.3897 48.5595C59.3859 49.1589 59.143 49.7323 58.7145 50.1534C58.2859 50.5746 57.7068 50.809 57.1045 50.8052L42.3348 50.7206L42.3223 54.1198C42.3173 54.8618 42.1655 55.5955 41.8756 56.2791C41.5857 56.9627 41.1633 57.5828 40.6326 58.1039C40.1019 58.625 39.4732 59.037 38.7825 59.3163C38.0918 59.5956 37.3526 59.7368 36.6071 59.7318C35.8615 59.7267 35.1243 59.5756 34.4374 59.287C33.7505 58.9984 33.1275 58.578 32.6039 58.0498C31.5463 56.983 30.9579 55.5418 30.968 54.0433L30.9804 50.6486L16.229 50.5461C15.6267 50.5423 15.0506 50.3005 14.6274 49.8739C14.2042 49.4474 13.9686 48.871 13.9724 48.2716L14.0636 32.46L10.6573 32.4384C7.52347 32.4186 4.99614 29.8712 5.01591 26.7523Z" fill="#8750A9" />
                        </svg>
                        <div className="heading">
                            Bite sized
                        </div>
                        <div className="description">
                            Breaking information down into manageable chunks.
                        </div>
                    </div>
                    <hr className="component__divider2"></hr>
                    <div className="roadmaps__component">
                        <svg className="icons" width="55" height="71" viewBox="0 0 76 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.50182e-06 12.3473C0.000322674 9.34197 1.03845 6.43988 2.91981 4.18497C4.80116 1.93005 7.39662 0.47711 10.2197 0.0984402C13.0429 -0.28023 15.8998 0.441366 18.2552 2.12799C20.6106 3.81462 22.3028 6.35049 23.0145 9.26035L58.4615 9.26035C63.113 9.26035 67.574 11.2118 70.8631 14.6853C74.1522 18.1588 76 22.8699 76 27.7822C76 32.6946 74.1522 37.4057 70.8631 40.8792C67.574 44.3527 63.113 46.3041 58.4615 46.3041L23.3846 46.3041C21.0589 46.3041 18.8284 47.2798 17.1838 49.0166C15.5393 50.7534 14.6154 53.1089 14.6154 55.5651C14.6154 58.0212 15.5393 60.3768 17.1838 62.1136C18.8284 63.8503 21.0589 64.826 23.3846 64.826L58.4615 64.826C59.2368 64.826 59.9803 65.1513 60.5285 65.7302C61.0767 66.3091 61.3846 67.0943 61.3846 67.913C61.3846 68.7317 61.0767 69.5169 60.5285 70.0958C59.9803 70.6748 59.2368 71 58.4615 71L23.3846 71C19.5084 71 15.7909 69.3738 13.05 66.4792C10.3091 63.5846 8.76924 59.6587 8.76924 55.5651C8.76924 51.4715 10.3091 47.5456 13.05 44.651C15.7909 41.7564 19.5084 40.1302 23.3846 40.1302L58.4615 40.1302C61.5625 40.1302 64.5365 38.8292 66.7292 36.5135C68.922 34.1979 70.1538 31.0571 70.1538 27.7822C70.1538 24.5074 68.922 21.3666 66.7292 19.0509C64.5365 16.7353 61.5625 15.4343 58.4615 15.4343L23.0145 15.4343C22.3028 18.3442 20.6106 20.88 18.2552 22.5667C15.8998 24.2533 13.0429 24.9749 10.2197 24.5962C7.39663 24.2176 4.80117 22.7646 2.91981 20.5097C1.03845 18.2548 0.000323199 15.3527 2.50182e-06 12.3473Z" fill="#8750A9" />
                        </svg>

                        <div className="heading">
                            Roadmaps
                        </div>
                        <div className="description">
                            Roadmaps created by skilled individuals
                        </div>
                    </div>
                    <hr className="component__divider3"></hr>
                    <div className="progress__component">
                        <svg className="icons" width="55" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.6786 0C15.9643 0 0 16 0 35.7143C0 55.4286 15.9643 71.4286 35.6786 71.4286C55.4286 71.4286 71.4286 55.4286 71.4286 35.7143C71.4286 16 55.4286 0 35.6786 0ZM35.7143 64.2857C19.9286 64.2857 7.14286 51.5 7.14286 35.7143C7.14286 19.9286 19.9286 7.14286 35.7143 7.14286C51.5 7.14286 64.2857 19.9286 64.2857 35.7143C64.2857 51.5 51.5 64.2857 35.7143 64.2857Z" fill="#8750A9" />
                        </svg>
                        <svg className="icon2" width="18" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.57146 0.714294H0.857178V22.26L20.8572 33.5714L23.7143 29.1546L6.57146 19.5668V0.714294Z" fill="#8750A9" />
                        </svg>
                        <div className="heading">
                            Track your Progress
                        </div>
                        <div className="description">
                            Keep track of your learning as your progress
                        </div>
                    </div>
                </div>
                <div className="lower__footer">
                    <div className="contact">Contact us</div>
                    <div className="About">About</div>
                    <hr className="footer__divider"></hr>
                    <div className="follow">
                        <div className="Follow">Follow us on:</div>
                        <div className="handles">
                            <svg className="twitter" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.0013 2.13215C21.3887 3.05 20.6371 3.83242 19.7465 4.47941C19.7553 4.65293 19.7597 4.84905 19.7597 5.06777C19.7597 6.28305 19.5838 7.4998 19.232 8.71801C18.8802 9.93624 18.3428 11.1023 17.6198 12.2162C16.8968 13.3301 16.0356 14.3169 15.0361 15.1766C14.0367 16.0363 12.8353 16.7218 11.432 17.2331C10.0287 17.7444 8.52471 18 6.92008 18C4.41579 18 2.10959 17.3191 0.00146484 15.9571C0.375631 15.9991 0.734489 16.0201 1.07804 16.0201C3.17017 16.0201 5.03878 15.371 6.68387 14.0729C5.7084 14.0549 4.83479 13.7524 4.06305 13.1655C3.2913 12.5786 2.76021 11.8287 2.46976 10.9157C2.75685 10.9708 3.04019 10.9983 3.3198 10.9983C3.72228 10.9983 4.1183 10.9455 4.50789 10.8397C3.46688 10.6297 2.60327 10.1075 1.91707 9.27301C1.23089 8.43854 0.887802 7.4754 0.887802 6.38359V6.32732C1.52678 6.68368 2.20835 6.87323 2.93251 6.89598C2.31582 6.48188 1.82688 5.94189 1.46569 5.276C1.10447 4.61011 0.923865 3.88949 0.923865 3.11416C0.923865 2.29645 1.1273 1.535 1.53417 0.829818C2.66625 2.2291 4.038 3.34745 5.64942 4.18487C7.26086 5.02231 8.98963 5.48739 10.8357 5.58013C10.757 5.24961 10.7176 4.9047 10.7174 4.5454C10.7174 3.29084 11.1582 2.21964 12.0397 1.33178C12.9213 0.443928 13.9849 0 15.2304 0C16.5345 0 17.6329 0.478266 18.5256 1.4348C19.5457 1.23129 20.5008 0.863196 21.3909 0.330516C21.048 1.4176 20.3872 2.2562 19.4085 2.84634C20.308 2.73868 21.1723 2.50061 22.0013 2.13215H22.0013Z" fill="#989898" />
                            </svg>
                            <svg className="insta" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 0C8.01488 0 7.6395 0.01375 6.46663 0.066C5.29375 0.121 4.49487 0.30525 3.795 0.5775C3.06088 0.853626 2.39593 1.28676 1.84663 1.84663C1.2871 2.39621 0.854023 3.06108 0.5775 3.795C0.30525 4.4935 0.119625 5.29375 0.066 6.4625C0.01375 7.63812 0 8.01213 0 11.0014C0 13.9879 0.01375 14.3619 0.066 15.5347C0.121 16.7063 0.30525 17.5051 0.5775 18.205C0.859375 18.9282 1.23475 19.5415 1.84663 20.1534C2.45713 20.7652 3.07037 21.142 3.79363 21.4225C4.49487 21.6947 5.29238 21.8804 6.46388 21.934C7.63813 21.9862 8.01213 22 11 22C13.9879 22 14.3605 21.9862 15.5347 21.934C16.7049 21.879 17.5065 21.6947 18.2064 21.4225C18.94 21.1462 19.6045 20.7131 20.1534 20.1534C20.7652 19.5415 21.1406 18.9282 21.4225 18.205C21.6934 17.5051 21.879 16.7063 21.934 15.5347C21.9862 14.3619 22 13.9879 22 11C22 8.01213 21.9862 7.63813 21.934 6.46388C21.879 5.29375 21.6934 4.4935 21.4225 3.795C21.146 3.06106 20.7129 2.39618 20.1534 1.84663C19.6042 1.28655 18.9392 0.853387 18.205 0.5775C17.5037 0.30525 16.7035 0.119625 15.5334 0.066C14.3591 0.01375 13.9865 0 10.9973 0H11.0014H11ZM10.0141 1.98275H11.0014C13.9384 1.98275 14.2863 1.99238 15.4454 2.046C16.5179 2.09413 17.1009 2.27425 17.4886 2.42412C18.0015 2.6235 18.3686 2.86275 18.7536 3.24775C19.1386 3.63275 19.3765 3.9985 19.5759 4.51275C19.7271 4.89913 19.9059 5.48213 19.954 6.55463C20.0076 7.71375 20.0186 8.06163 20.0186 10.9973C20.0186 13.9329 20.0076 14.2821 19.954 15.4412C19.9059 16.5138 19.7257 17.0954 19.5759 17.4831C19.3995 17.9607 19.118 18.3926 18.7522 18.7467C18.3672 19.1318 18.0015 19.3696 17.4873 19.569C17.1023 19.7203 16.5192 19.899 15.4454 19.9485C14.2863 20.0007 13.9384 20.0131 11.0014 20.0131C8.06438 20.0131 7.71513 20.0007 6.556 19.9485C5.4835 19.899 4.90188 19.7203 4.51412 19.569C4.03631 19.3929 3.60405 19.1119 3.24913 18.7467C2.88303 18.392 2.60112 17.9598 2.42412 17.4818C2.27425 17.0954 2.09413 16.5124 2.046 15.4399C1.99375 14.2808 1.98275 13.9329 1.98275 10.9945C1.98275 8.0575 1.99375 7.711 2.046 6.55187C2.0955 5.47937 2.27425 4.89638 2.4255 4.50863C2.62488 3.99575 2.86412 3.62862 3.24913 3.24362C3.63412 2.85862 3.99988 2.62075 4.51412 2.42138C4.90188 2.27013 5.4835 2.09138 6.556 2.04188C7.57075 1.99513 7.964 1.98138 10.0141 1.98V1.98275ZM16.8726 3.80875C16.6993 3.80875 16.5276 3.84289 16.3675 3.90923C16.2073 3.97557 16.0618 4.0728 15.9392 4.19537C15.8167 4.31794 15.7194 4.46346 15.6531 4.62361C15.5868 4.78376 15.5526 4.95541 15.5526 5.12875C15.5526 5.30209 15.5868 5.47374 15.6531 5.63389C15.7194 5.79404 15.8167 5.93956 15.9392 6.06213C16.0618 6.1847 16.2073 6.28193 16.3675 6.34827C16.5276 6.41461 16.6993 6.44875 16.8726 6.44875C17.2227 6.44875 17.5585 6.30968 17.806 6.06213C18.0536 5.81458 18.1926 5.47884 18.1926 5.12875C18.1926 4.77866 18.0536 4.44292 17.806 4.19537C17.5585 3.94782 17.2227 3.80875 16.8726 3.80875ZM11.0014 5.3515C10.2521 5.33981 9.50798 5.47729 8.81234 5.75594C8.11671 6.0346 7.48346 6.44885 6.94946 6.97458C6.41546 7.50032 5.99138 8.12703 5.70191 8.81823C5.41244 9.50944 5.26336 10.2513 5.26336 11.0007C5.26336 11.7501 5.41244 12.4919 5.70191 13.1831C5.99138 13.8743 6.41546 14.5011 6.94946 15.0268C7.48346 15.5525 8.11671 15.9668 8.81234 16.2454C9.50798 16.5241 10.2521 16.6616 11.0014 16.6499C12.4844 16.6267 13.8988 16.0214 14.9393 14.9645C15.9799 13.9076 16.5631 12.4839 16.5631 11.0007C16.5631 9.51751 15.9799 8.09382 14.9393 7.03691C13.8988 5.97999 12.4844 5.37464 11.0014 5.3515ZM11.0014 7.33288C11.974 7.33288 12.9067 7.71923 13.5944 8.40695C14.2821 9.09467 14.6685 10.0274 14.6685 11C14.6685 11.9726 14.2821 12.9053 13.5944 13.593C12.9067 14.2808 11.974 14.6671 11.0014 14.6671C10.0288 14.6671 9.09605 14.2808 8.40833 13.593C7.72061 12.9053 7.33425 11.9726 7.33425 11C7.33425 10.0274 7.72061 9.09467 8.40833 8.40695C9.09605 7.71923 10.0288 7.33288 11.0014 7.33288Z" fill="#989898" />
                            </svg>
                            <svg className="linkedin" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.59693e-07 1.75446C2.59693e-07 1.28915 0.184844 0.842894 0.513868 0.51387C0.842892 0.184846 1.28914 2.33894e-06 1.75445 2.33894e-06H19.2436C19.4742 -0.000374278 19.7026 0.0447351 19.9158 0.132748C20.1289 0.22076 20.3226 0.349948 20.4857 0.512914C20.6489 0.67588 20.7783 0.869425 20.8665 1.08247C20.9548 1.29551 21.0001 1.52386 21 1.75446V19.2436C21.0002 19.4743 20.955 19.7027 20.8669 19.9158C20.7788 20.129 20.6495 20.3227 20.4865 20.4858C20.3234 20.6489 20.1298 20.7783 19.9167 20.8665C19.7036 20.9548 19.4752 21.0001 19.2446 21H1.75445C1.52398 21 1.29576 20.9546 1.08283 20.8664C0.869911 20.7781 0.676459 20.6488 0.51353 20.4858C0.350602 20.3228 0.22139 20.1293 0.133276 19.9163C0.0451627 19.7033 -0.000125137 19.4751 2.59693e-07 19.2446V1.75446ZM8.31218 8.00673H11.1558V9.43473C11.5662 8.61382 12.6162 7.875 14.1941 7.875C17.219 7.875 17.9359 9.51014 17.9359 12.5103V18.0676H14.8747V13.1937C14.8747 11.4851 14.4642 10.521 13.4219 10.521C11.9757 10.521 11.3744 11.5605 11.3744 13.1937V18.0676H8.31218V8.00673ZM3.06218 17.9369H6.12436V7.875H3.06218V17.9359V17.9369ZM6.5625 4.59327C6.56827 4.85546 6.52162 5.11616 6.42527 5.36007C6.32893 5.60399 6.18483 5.8262 6.00145 6.01367C5.81806 6.20114 5.59908 6.35009 5.35734 6.45178C5.11561 6.55347 4.856 6.60585 4.59375 6.60585C4.3315 6.60585 4.07189 6.55347 3.83016 6.45178C3.58842 6.35009 3.36944 6.20114 3.18605 6.01367C3.00266 5.8262 2.85857 5.60399 2.76223 5.36007C2.66588 5.11616 2.61923 4.85546 2.625 4.59327C2.63633 4.07864 2.84873 3.58889 3.21671 3.22893C3.58469 2.86897 4.07899 2.6674 4.59375 2.6674C5.10851 2.6674 5.60281 2.86897 5.97079 3.22893C6.33877 3.58889 6.55117 4.07864 6.5625 4.59327Z" fill="#989898" />
                            </svg>
                            <svg className="facebook" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.04545 0.727417C0.926591 0.727417 0 1.65401 0 2.77287V21.182C0 22.3008 0.926591 23.2274 2.04545 23.2274H20.4545C21.5734 23.2274 22.5 22.3008 22.5 21.182V2.77287C22.5 1.65401 21.5734 0.727417 20.4545 0.727417H2.04545ZM2.04545 2.77287H20.4545V21.182H15.1486V14.2786H17.8016L18.1851 11.2104H15.1497V9.22832C15.1497 8.33446 15.3685 7.72696 16.651 7.72696H18.313V4.94617C18.0297 4.91037 17.0468 4.85003 15.9167 4.85003C13.5593 4.85003 11.9536 6.26855 11.9536 8.90923V11.2104H9.26898V14.2786H11.9526V21.182H2.04545V2.77287Z" fill="#989898" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </MyDesktop>
    )
}
