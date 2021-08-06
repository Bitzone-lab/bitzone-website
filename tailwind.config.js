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
                navbar: 'rgba(74,37,170,0.5)',
                'navbar-2': 'rgba(74,37,170, 1)',
                footer: '#00007A',
                'why-whe': '#4A25AA',
                input: '#EEEEEE'
            },
            backgroundImage: {
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
                'radial-primary':
                    'radial-gradient(50% 50% at 50% 50%, #7F52DD 0%, #4A25AA 100%)',
                'call-to-contact':
                    'linear-gradient(0deg, rgba(74, 37, 170, 0.5), rgba(74, 37, 170, 0.5)), url(/img/call_to_contact.jpg)',
                'call-to-contact-project':
                    'linear-gradient(0deg, rgba(74, 37, 170, 0.5), rgba(74, 37, 170, 0.5)), url(/img/call-to-contact-project.png)',
                'contact-form':
                    'linear-gradient(0deg, rgba(74, 37, 170, 0.5), rgba(74, 37, 170, 0.5)), url(/img/contact-form.png)',
                'why-whe-wrapper-image':
                    'linear-gradient(225deg, #FFFF7E 0%, #EDE04B 100%)',
                'bits-img': 'url("/img/bits.png")',
                'services-dev': 'url("/img/dev_bg.png")',
                ux: 'linear-gradient(0deg, rgba(74, 37, 170, 0.5), rgba(74, 37, 170, 0.5)), url(/img/ux_bg.png)',
                cloud: 'linear-gradient(0deg, rgba(74, 37, 170, 0.5), rgba(74, 37, 170, 0.5)), url(/img/cloud_bg.jpeg)',
                dev: 'linear-gradient(0deg, rgba(74, 37, 170, 0.5), rgba(74, 37, 170, 0.5)), url(/img/dev_bg.png)',
                about1: 'linear-gradient(0deg, rgba(74, 37, 170, 0.5), rgba(74, 37, 170, 0.5)), url(/img/about_1.png)',
                about2: 'linear-gradient(0deg, rgba(74, 37, 170, 0.5), rgba(74, 37, 170, 0.5)), url(/img/about_2.png)',
                about3: 'linear-gradient(0deg, rgba(74, 37, 170, 0.5), rgba(74, 37, 170, 0.5)), url(/img/about_3.png)',
                wireframes:
                    'linear-gradient(0deg, rgba(74, 37, 170, 0.5), rgba(74, 37, 170, 0.5)), url(/img/wireframes.png)',
                'header-projects-mobile':
                    'linear-gradient(to right, #7F52DD 0%, #00007A 50.01%, #29A6FF 50%, #0C69AB 100%)',
                'erp-background':
                    'linear-gradient(to right, #29A6FF 0%, #0C69AB 100%)',
                'callejeros-background':
                    'linear-gradient(to right, #FFFF7E 0%, #D8CC44 100%)',
                'visor-background':
                    'linear-gradient(to right, #0049C3 0%, #002056 100%)',
                'phrase-about':
                    'linear-gradient(0deg, rgba(74, 37, 170, 0.5), rgba(74, 37, 170, 0.5)), url(/img/phrase_bg.png)'
            },
            colors: {
                background: '#EEEEEE',
                primary: '#4A25AA',
                'primary-light': '#7F52DD',
                'primary-dark': '#00007A',
                accent: '#EDE04B',
                'accent-light': '#FFFF7E',
                'accent-dark': '#B7AE08',
                'border-normal': '#111111',
                'border-subtle': '#AAAAAA'
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
