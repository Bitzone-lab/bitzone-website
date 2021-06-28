module.exports = {
    // mode: 'jit',
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true
    },
    purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
    theme: {
        fontFamily: {
            sans: ['Overpass', 'system-ui'],
            sofia: ['Sofia', 'system-ui']
        },
        extend: {
            backgroundColor: {
                navbar: 'rgba(74,37,170,0.5)',
                footer: '#00007A'
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
                'call-to-contact':
                    'linear-gradient(0deg, rgba(74, 37, 170, 0.5), rgba(74, 37, 170, 0.5)), url(/img/call_to_contact.jpg)',
                'contact-form':
                    'linear-gradient(0deg, rgba(74, 37, 170, 0.5), rgba(74, 37, 170, 0.5)), url(/img/contact-form.png)'
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
