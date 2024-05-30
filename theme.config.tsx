import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { FeelbackYesNo, PRESET_LIKE_DISLIKE } from "@feelback/react"
import "@feelback/react/styles/feelback.css"

import Docsearch from "./components/docsearch";

const config: DocsThemeConfig = {
  search: { component: <Docsearch /> },
  logo: (
    <>
      <svg width="194" height="32" viewBox="0 0 194 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.038 24.23C6.072 24.23 5.175 24.0997 4.347 23.839C3.519 23.5783 2.82133 23.1873 2.254 22.666C1.68667 22.1447 1.28033 21.493 1.035 20.711C0.805 19.929 0.774333 19.0167 0.943 17.974C1.06567 17.3147 1.196 16.6553 1.334 15.996C1.48733 15.3367 1.64067 14.6697 1.794 13.995C2.3 11.925 3.21233 10.3533 4.531 9.28C5.84967 8.20667 7.62833 7.67 9.867 7.67C10.833 7.67 11.7223 7.808 12.535 8.084C13.363 8.34467 14.0607 8.74333 14.628 9.28C15.2107 9.81667 15.617 10.476 15.847 11.258C16.0923 12.04 16.123 12.9523 15.939 13.995C15.8317 14.6697 15.7013 15.3367 15.548 15.996C15.41 16.6553 15.2643 17.3147 15.111 17.974C14.5897 20.0747 13.6697 21.6463 12.351 22.689C11.0323 23.7163 9.26133 24.23 7.038 24.23ZM7.337 20.918C8.165 20.918 8.89333 20.6727 9.522 20.182C10.1507 19.6913 10.5953 18.9093 10.856 17.836C11.0247 17.1613 11.1703 16.525 11.293 15.927C11.431 15.329 11.5537 14.708 11.661 14.064C11.8603 12.9907 11.7683 12.2087 11.385 11.718C11.0017 11.2273 10.396 10.982 9.568 10.982C8.74 10.982 8.01167 11.2273 7.383 11.718C6.76967 12.2087 6.33267 12.9907 6.072 14.064C5.90333 14.708 5.75 15.329 5.612 15.927C5.48933 16.525 5.36667 17.1613 5.244 17.836C5.06 18.9093 5.152 19.6913 5.52 20.182C5.888 20.6727 6.49367 20.918 7.337 20.918ZM18.421 24C18.2677 24 18.145 23.9463 18.053 23.839C17.961 23.7317 17.9304 23.5937 17.961 23.425L21.135 8.475C21.1657 8.30633 21.25 8.16833 21.388 8.061C21.526 7.95367 21.6717 7.9 21.825 7.9H27.943C28.8784 7.9 29.7217 8.00733 30.473 8.222C31.2397 8.43667 31.876 8.76633 32.382 9.211C32.888 9.65567 33.2407 10.2153 33.44 10.89C33.6394 11.5493 33.647 12.3237 33.463 13.213C33.0797 14.9763 32.2977 16.2797 31.117 17.123C29.9517 17.9663 28.38 18.388 26.402 18.388H23.297L22.239 23.425C22.2084 23.5937 22.124 23.7317 21.986 23.839C21.8634 23.9463 21.7177 24 21.549 24H18.421ZM23.895 15.214H26.54C27.1687 15.214 27.7284 15.0453 28.219 14.708C28.725 14.3707 29.0547 13.857 29.208 13.167C29.2847 12.7683 29.3 12.4157 29.254 12.109C29.208 11.8023 29.047 11.557 28.771 11.373C28.5104 11.189 28.104 11.097 27.552 11.097H24.792L23.895 15.214ZM38.794 24C38.6253 24 38.495 23.9463 38.403 23.839C38.311 23.7317 38.2803 23.5937 38.311 23.425L40.864 11.511H36.77C36.6167 11.511 36.494 11.4573 36.402 11.35C36.31 11.2273 36.2793 11.0893 36.31 10.936L36.839 8.475C36.8697 8.30633 36.9463 8.16833 37.069 8.061C37.207 7.95367 37.3603 7.9 37.529 7.9H49.903C50.0717 7.9 50.1943 7.95367 50.271 8.061C50.363 8.16833 50.3937 8.30633 50.363 8.475L49.834 10.936C49.8033 11.0893 49.719 11.2273 49.581 11.35C49.4583 11.4573 49.3127 11.511 49.144 11.511H45.05L42.52 23.425C42.4893 23.5937 42.405 23.7317 42.267 23.839C42.1443 23.9463 41.9987 24 41.83 24H38.794ZM51.0059 24C50.8372 24 50.7069 23.9463 50.6149 23.839C50.5229 23.7317 50.4922 23.5937 50.5229 23.425L53.7199 8.475C53.7506 8.30633 53.8349 8.16833 53.9729 8.061C54.1109 7.95367 54.2566 7.9 54.4099 7.9H57.5149C57.6682 7.9 57.7909 7.95367 57.8829 8.061C57.9749 8.16833 58.0056 8.30633 57.9749 8.475L54.7779 23.425C54.7472 23.5937 54.6629 23.7317 54.5249 23.839C54.4022 23.9463 54.2642 24 54.1109 24H51.0059ZM59.7969 24C59.6283 24 59.4979 23.9463 59.4059 23.839C59.3139 23.7317 59.2833 23.5937 59.3139 23.425L62.4879 8.475C62.5186 8.30633 62.6029 8.16833 62.7409 8.061C62.8789 7.95367 63.0323 7.9 63.2009 7.9H65.6849C65.9303 7.9 66.0989 7.969 66.1909 8.107C66.2983 8.22967 66.3673 8.32933 66.3979 8.406L68.8819 15.674L74.4939 8.406C74.5399 8.32933 74.6319 8.22967 74.7699 8.107C74.9233 7.969 75.1226 7.9 75.3679 7.9H77.8519C78.0206 7.9 78.1509 7.95367 78.2429 8.061C78.3349 8.16833 78.3656 8.30633 78.3349 8.475L75.1609 23.425C75.1303 23.5937 75.0459 23.7317 74.9079 23.839C74.7699 23.9463 74.6166 24 74.4479 24H71.6879C71.5346 24 71.4119 23.9463 71.3199 23.839C71.2279 23.7317 71.1973 23.5937 71.2279 23.425L73.0219 14.938L69.5029 19.607C69.3956 19.7297 69.2653 19.8523 69.1119 19.975C68.9739 20.0823 68.7976 20.136 68.5829 20.136H67.3869C67.1723 20.136 67.0189 20.0823 66.9269 19.975C66.8349 19.8677 66.7659 19.745 66.7199 19.607L65.0869 14.731L63.2239 23.425C63.1933 23.5937 63.1089 23.7317 62.9709 23.839C62.8483 23.9463 62.7103 24 62.5569 24H59.7969ZM80.1318 24C79.9632 24 79.8328 23.9463 79.7408 23.839C79.6488 23.7317 79.6182 23.5937 79.6488 23.425L82.8458 8.475C82.8765 8.30633 82.9608 8.16833 83.0988 8.061C83.2368 7.95367 83.3825 7.9 83.5358 7.9H86.6408C86.7942 7.9 86.9168 7.95367 87.0088 8.061C87.1008 8.16833 87.1315 8.30633 87.1008 8.475L83.9038 23.425C83.8732 23.5937 83.7888 23.7317 83.6508 23.839C83.5282 23.9463 83.3902 24 83.2368 24H80.1318ZM94.6038 24.23C93.0705 24.23 91.8132 24.0153 90.8318 23.586C89.8658 23.1567 89.1682 22.5893 88.7388 21.884C88.3248 21.1633 88.1792 20.4043 88.3018 19.607C88.3325 19.4843 88.3938 19.377 88.4858 19.285C88.5932 19.1777 88.7158 19.124 88.8538 19.124H91.7978C92.0125 19.124 92.1658 19.1623 92.2578 19.239C92.3498 19.3157 92.4418 19.4153 92.5338 19.538C92.5952 19.768 92.7178 19.9903 92.9018 20.205C93.0858 20.4197 93.3388 20.596 93.6608 20.734C93.9982 20.8567 94.4122 20.918 94.9028 20.918C95.7922 20.918 96.5052 20.78 97.0418 20.504C97.5785 20.228 97.8928 19.8523 97.9848 19.377C98.0768 19.0397 98.0155 18.7637 97.8008 18.549C97.6015 18.319 97.2412 18.1197 96.7198 17.951C96.2138 17.767 95.5315 17.583 94.6728 17.399C93.5535 17.1537 92.6335 16.8163 91.9128 16.387C91.1922 15.9423 90.6862 15.3827 90.3948 14.708C90.1188 14.018 90.0805 13.1977 90.2798 12.247C90.5865 10.8363 91.3455 9.72467 92.5568 8.912C93.7682 8.084 95.3398 7.67 97.2718 7.67C98.2685 7.67 99.1502 7.808 99.9168 8.084C100.699 8.36 101.351 8.728 101.872 9.188C102.393 9.648 102.769 10.1387 102.999 10.66C103.229 11.166 103.306 11.6643 103.229 12.155C103.214 12.2777 103.152 12.3927 103.045 12.5C102.938 12.592 102.815 12.638 102.677 12.638H99.5948C99.4415 12.638 99.3035 12.6073 99.1808 12.546C99.0735 12.4847 98.9815 12.385 98.9048 12.247C98.9048 11.9097 98.7285 11.6183 98.3758 11.373C98.0232 11.1123 97.5555 10.982 96.9728 10.982C96.3135 10.982 95.7615 11.1047 95.3168 11.35C94.8722 11.58 94.5962 11.9403 94.4888 12.431C94.4122 12.7377 94.4505 13.006 94.6038 13.236C94.7725 13.466 95.0792 13.6653 95.5238 13.834C95.9838 14.0027 96.6125 14.179 97.4098 14.363C98.7592 14.6237 99.8172 14.9763 100.584 15.421C101.351 15.8503 101.864 16.3947 102.125 17.054C102.401 17.7133 102.439 18.5183 102.24 19.469C101.903 21.033 101.082 22.2213 99.7788 23.034C98.4908 23.8313 96.7658 24.23 94.6038 24.23ZM105.462 24C105.294 24 105.163 23.9463 105.071 23.839C104.979 23.7317 104.949 23.5937 104.979 23.425L108.153 8.475C108.184 8.30633 108.268 8.16833 108.406 8.061C108.544 7.95367 108.698 7.9 108.866 7.9H111.35C111.596 7.9 111.764 7.969 111.856 8.107C111.964 8.22967 112.033 8.32933 112.063 8.406L114.547 15.674L120.159 8.406C120.205 8.32933 120.297 8.22967 120.435 8.107C120.589 7.969 120.788 7.9 121.033 7.9H123.517C123.686 7.9 123.816 7.95367 123.908 8.061C124 8.16833 124.031 8.30633 124 8.475L120.826 23.425C120.796 23.5937 120.711 23.7317 120.573 23.839C120.435 23.9463 120.282 24 120.113 24H117.353C117.2 24 117.077 23.9463 116.985 23.839C116.893 23.7317 116.863 23.5937 116.893 23.425L118.687 14.938L115.168 19.607C115.061 19.7297 114.931 19.8523 114.777 19.975C114.639 20.0823 114.463 20.136 114.248 20.136H113.052C112.838 20.136 112.684 20.0823 112.592 19.975C112.5 19.8677 112.431 19.745 112.385 19.607L110.752 14.731L108.889 23.425C108.859 23.5937 108.774 23.7317 108.636 23.839C108.514 23.9463 108.376 24 108.222 24H105.462Z" fill="#FF0420"/>
        <path d="M134.081 24C133.928 24 133.813 23.954 133.736 23.862C133.659 23.7547 133.636 23.6243 133.667 23.471L136.864 8.452C136.895 8.28333 136.964 8.153 137.071 8.061C137.194 7.95367 137.332 7.9 137.485 7.9H142.453C143.48 7.9 144.385 8.038 145.167 8.314C145.949 8.57467 146.585 8.97333 147.076 9.51C147.567 10.0313 147.896 10.683 148.065 11.465C148.249 12.247 148.241 13.1363 148.042 14.133C147.904 14.823 147.781 15.4287 147.674 15.95C147.567 16.4713 147.429 17.0693 147.26 17.744C146.938 19.1547 146.478 20.3277 145.88 21.263C145.282 22.183 144.485 22.873 143.488 23.333C142.507 23.7777 141.242 24 139.693 24H134.081ZM136.22 22.045H139.716C140.774 22.045 141.648 21.8993 142.338 21.608C143.028 21.3167 143.58 20.849 143.994 20.205C144.423 19.561 144.761 18.71 145.006 17.652C145.113 17.192 145.205 16.7933 145.282 16.456C145.374 16.1033 145.451 15.7583 145.512 15.421C145.589 15.0683 145.665 14.6697 145.742 14.225C146.033 12.7377 145.911 11.6413 145.374 10.936C144.853 10.2153 143.795 9.855 142.2 9.855H138.819L136.22 22.045ZM155.343 24.23C154.439 24.23 153.618 24.1073 152.882 23.862C152.146 23.6013 151.541 23.2103 151.065 22.689C150.59 22.1677 150.26 21.5083 150.076 20.711C149.908 19.9137 149.915 18.9783 150.099 17.905C150.222 17.2303 150.352 16.5863 150.49 15.973C150.628 15.3443 150.782 14.6927 150.95 14.018C151.456 11.8867 152.346 10.2997 153.618 9.257C154.906 8.199 156.516 7.67 158.448 7.67C159.368 7.67 160.189 7.80033 160.909 8.061C161.645 8.32167 162.251 8.72033 162.726 9.257C163.217 9.79367 163.547 10.453 163.715 11.235C163.884 12.017 163.876 12.9447 163.692 14.018C163.57 14.6927 163.439 15.3443 163.301 15.973C163.163 16.5863 163.018 17.2303 162.864 17.905C162.343 20.067 161.438 21.6617 160.15 22.689C158.878 23.7163 157.275 24.23 155.343 24.23ZM155.435 22.275C156.647 22.275 157.712 21.9223 158.632 21.217C159.552 20.5117 160.204 19.3693 160.587 17.79C160.756 17.1 160.894 16.4867 161.001 15.95C161.124 15.398 161.247 14.7847 161.369 14.11C161.661 12.5307 161.538 11.3883 161.001 10.683C160.48 9.97767 159.598 9.625 158.356 9.625C157.13 9.625 156.064 9.97767 155.159 10.683C154.255 11.3883 153.611 12.5307 153.227 14.11C153.059 14.7847 152.913 15.398 152.79 15.95C152.668 16.4867 152.545 17.1 152.422 17.79C152.146 19.3693 152.261 20.5117 152.767 21.217C153.289 21.9223 154.178 22.275 155.435 22.275ZM170.955 24.23C169.912 24.23 169.015 24.0843 168.264 23.793C167.528 23.5017 166.938 23.08 166.493 22.528C166.064 21.9607 165.772 21.3013 165.619 20.55C165.481 19.7833 165.496 18.9323 165.665 17.997C165.772 17.3683 165.903 16.6937 166.056 15.973C166.225 15.2523 166.386 14.5623 166.539 13.903C166.846 12.661 167.313 11.5723 167.942 10.637C168.571 9.70167 169.391 8.97333 170.403 8.452C171.415 7.93067 172.626 7.67 174.037 7.67C175.095 7.67 176 7.808 176.751 8.084C177.518 8.36 178.131 8.74333 178.591 9.234C179.051 9.72467 179.365 10.2767 179.534 10.89C179.703 11.5033 179.726 12.1397 179.603 12.799C179.588 12.937 179.542 13.052 179.465 13.144C179.388 13.236 179.281 13.282 179.143 13.282H177.832C177.679 13.282 177.548 13.2437 177.441 13.167C177.349 13.0903 177.303 12.9523 177.303 12.753C177.395 11.603 177.127 10.798 176.498 10.338C175.869 9.86267 175.018 9.625 173.945 9.625C172.718 9.625 171.645 9.97767 170.725 10.683C169.82 11.373 169.176 12.4847 168.793 14.018C168.471 15.2753 168.195 16.5633 167.965 17.882C167.704 19.4153 167.842 20.5347 168.379 21.24C168.931 21.93 169.82 22.275 171.047 22.275C172.12 22.275 173.071 22.0527 173.899 21.608C174.727 21.1633 175.402 20.343 175.923 19.147C176.015 18.9477 176.107 18.8097 176.199 18.733C176.306 18.6563 176.429 18.618 176.567 18.618H177.878C178.016 18.618 178.123 18.664 178.2 18.756C178.277 18.848 178.292 18.963 178.246 19.101C178.077 19.7297 177.809 20.3507 177.441 20.964C177.073 21.5773 176.598 22.1293 176.015 22.62C175.432 23.1107 174.727 23.5017 173.899 23.793C173.071 24.0843 172.09 24.23 170.955 24.23ZM185.584 24.23C184.25 24.23 183.161 24.0307 182.318 23.632C181.474 23.2333 180.861 22.7043 180.478 22.045C180.11 21.3857 179.979 20.688 180.087 19.952C180.102 19.8293 180.156 19.722 180.248 19.63C180.34 19.5227 180.455 19.469 180.593 19.469H181.858C182.026 19.469 182.141 19.515 182.203 19.607C182.279 19.699 182.333 19.8063 182.364 19.929C182.364 20.297 182.471 20.665 182.686 21.033C182.916 21.3857 183.268 21.6847 183.744 21.93C184.234 22.16 184.878 22.275 185.676 22.275C186.994 22.275 188.029 22.045 188.781 21.585C189.532 21.1097 189.992 20.481 190.161 19.699C190.283 19.1623 190.214 18.733 189.954 18.411C189.693 18.0737 189.248 17.7747 188.62 17.514C188.006 17.2533 187.194 16.9697 186.182 16.663C185.139 16.341 184.296 15.973 183.652 15.559C183.008 15.145 182.571 14.639 182.341 14.041C182.111 13.4277 182.088 12.684 182.272 11.81C182.548 10.568 183.222 9.57133 184.296 8.82C185.369 8.05333 186.787 7.67 188.551 7.67C189.486 7.67 190.291 7.80033 190.966 8.061C191.64 8.30633 192.192 8.64367 192.622 9.073C193.051 9.487 193.342 9.93933 193.496 10.43C193.664 10.9053 193.71 11.373 193.634 11.833C193.618 11.9403 193.572 12.0477 193.496 12.155C193.419 12.247 193.296 12.293 193.128 12.293H191.817C191.725 12.293 191.625 12.2623 191.518 12.201C191.41 12.1397 191.349 12.0247 191.334 11.856C191.38 11.2273 191.134 10.6983 190.598 10.269C190.061 9.83967 189.348 9.625 188.459 9.625C187.462 9.625 186.596 9.81667 185.86 10.2C185.139 10.5833 184.687 11.1813 184.503 11.994C184.395 12.5153 184.449 12.9523 184.664 13.305C184.878 13.6423 185.269 13.9413 185.837 14.202C186.404 14.4627 187.171 14.7387 188.137 15.03C189.287 15.3673 190.207 15.743 190.897 16.157C191.587 16.571 192.062 17.077 192.323 17.675C192.583 18.2577 192.614 18.986 192.415 19.86C192.123 21.3013 191.38 22.39 190.184 23.126C189.003 23.862 187.47 24.23 185.584 24.23Z" fill="currentColor"/>
      </svg>
    </>
  ),
  darkMode: true,
  project: {
    link: 'https://github.com/ethereum-optimism/docs',
  },
  docsRepositoryBase: 'https://github.com/ethereum-optimism/docs/blob/main/',
  footer: {
    text: 'OP Documentation',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true
  },
  toc: {
    backToTop: true,
    extraContent: () =>
    <>
        <hr className="divider top-divider" />
        <FeelbackYesNo contentSetId="b2983747-797d-4e6e-9ea3-15d59b9c27ce"
            preset={PRESET_LIKE_DISLIKE}
            textQuestion="Is this page useful?"
            textAnswer="Thanks for your feedback :)"
        />
        <hr className="divider" />
    </>
  },
  feedback: {
    content: '❤️ Share general feedback',
    labels: 'user-feedback'
  },
  editLink: {
    text: '✏️ Edit this page on GitHub'
  },
  banner: {
    key: '2.4-release',
    text: (
      <a href="/builders/notices/fp-changes" target="_self" rel="noopener noreferrer" aria-label="Preparing for Fault Proof Breaking Changes">
        📌 UPDATE: Get Prepared for Breaking Changes to Fault Proofs and Withdrawal Times. Please review the Notices (README) for more info. → 📌
      </a>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Optimism Docs'
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.optimism.io' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Optimism Docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Optimism Docs for developers'}
        />
        <link rel="icon" href="/img/icons/favicon.ico" type="image/x-icon"></link>
      </>
    )
  },
  // https://nextra.site/docs/docs-theme/theme-configuration
  // primaryHue: {
  //   dark: 
  //   light: 
  // }
}

export default config
