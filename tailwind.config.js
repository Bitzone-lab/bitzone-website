module.exports = {
    theme: {
        fontFamily: {
            sans: ['OverpassLight', 'system-ui'],
            'overpass-light': ['OverpassLight', 'system-ui'],
            overpass: ['Overpass', 'system-ui'],
            'overpass-bold': ['OverpassBold', 'system-ui'],
            'sofia-light': ['SofiaLight', 'system-ui'],
            sofia: ['Sofia', 'system-ui'],
            'sofia-semibold': ['SofiaSemiBold', 'system-ui'],
            'sofia-bold': ['SofiaBold', 'system-ui']
        },
        extend: {
            backgroundColor: {
                footer: '#00007A',
                'why-whe': '#4A25AA',
                input: '#EEEEEE'
            },
            backgroundImage: {
                navbar: 'linear-gradient(111.34deg, #7F52DD 0%, #00007A 100%)',
                'navbar-hidden':
                    'linear-gradient(111.34deg, #7f52dd 0%, #00007a 100%)',
                'linear-accent':
                    'linear-gradient(165.74deg, rgba(183, 174, 8, 0.18) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(165.98deg, #FFFF7E 0%, #EDE04B 101.39%)',
                'linear-primary':
                    'linear-gradient(111.34deg, #7F52DD 0%, #00007A 100%)',
                'linear-black':
                    'linear-gradient(165.46deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100.43%), linear-gradient(165.72deg, #2F2F2F 0%, #000000 100.04%)',
                'linear-green':
                    'linear-gradient(249.52deg, #6FCF97 0%, #219653 100%)',
                'radial-accent':
                    'radial-gradient(50% 50% at 50% 50%, #FFFF7E 0%, #EDE04B 100%)',
                'call-to-contact': 'url(/images/call_to_contact.jpg)',
                'radial-primary':
                    'radial-gradient(50% 50% at 50% 50%, #7F52DD 0%, #4A25AA 100%)',
                'why-whe-wrapper-image':
                    'linear-gradient(225deg, #FFFF7E 0%, #EDE04B 100%)',
                'services-dev': 'url("/img/dev_bg.png")',
                header: 'url("/images/home_header.jpg")',
                'about-header': 'url("/images/about-header.jpg")',
                'service-header': 'url("/images/services/header.jpg")',
                'contact-header': 'url("/images/contact-header.jpg")',
                'project-header': 'url("/images/project/project-header.jpg")',
                'service-ing': 'url("/images/services/ing.jpg")',
                'service-ia': 'url("/images/services/ia.jpg")',
                'service-cloud': 'url("/images/services/cloud.jpg")',
                'service-cloud-benefits':
                    'url("/images/services/image-15.jpg")',
                'service-se-benefits': 'url("/images/services/image-14.jpg")',
                cloud: 'url(/images/services/cloud-header.jpg)',
                ia: 'url("/images/services/ia-header.jpg")',
                ing: 'url("/images/services/ing-header.jpg")',
                'service-ia-project': 'url("/images/services/image-16.jpg")',
                'header-projects-mobile':
                    'linear-gradient(to right, #7F52DD 0%, #00007A 50.01%, #29A6FF 50%, #0C69AB 100%)',
                'erp-background':
                    'linear-gradient(to right, #29A6FF 0%, #0C69AB 100%)',
                'callejeros-background':
                    'linear-gradient(to right, #FFFF7E 0%, #D8CC44 100%)',
                'visor-background':
                    'linear-gradient(to right, #0049C3 0%, #002056 100%)'
            },
            colors: {
                background: '#EEEEEE',
                primary: '#4A25AA',
                'primary-light': '#7F52DD',
                'primary-dark': '#00007A',
                accent: '#E5D300',
                'accent-light': '#FFFF7E',
                'accent-dark': '#B7AE08',
                'border-normal': '#111111',
                'border-subtle': '#AAAAAA',
                'accent-alt': '#99E6FD'
            },
            textColor: {
                subtle: 'rgba(28, 14, 64, 0.87)',
                normal: 'rgba(28, 14, 64, 0.5)',
                tagline: 'rgba(28, 14, 64, 0.25)'
            },
            dropShadow: {
                contact: '0px 2px 30px rgba(48, 70, 89, 0.15)'
            },
            borderColor: {
                accent: '#EDE04B'
            },
            boxShadow: {
                'wrapper-image-why-whe': '0px 4px 4px 2px rgba(0, 0, 0, 0.25)'
            }
        }
    },
    daisyui: {
        themes: [
            {
                bitzone: {
                    primary: '#4A25AA',
                    'primary-focus': '#00007A',
                    'primary-content': '#FFFFFF',
                    accent: '#EDE04B',
                    'accent-focus': '#B7AE08',
                    'accent-content': '#000000',
                    neutral: '#111111',
                    'neutral-focus': '#000000',
                    'neutral-content': '#FFFFFF',
                    'base-100': '#FAFAFA',
                    'base-200': '#EEEEEE',
                    'base-300': '#AAAAAA',
                    'base-content': ' rgba(28, 14, 64, 0.87)',
                    info: '#2094f3',
                    success: '#009485',
                    warning: '#ff9900',
                    error: '#ff5724'
                }
            }
        ]
    },
    variants: {},
    plugins: [require('daisyui')]
}
