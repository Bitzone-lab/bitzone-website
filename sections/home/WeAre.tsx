import Carousel, { Content } from '../../components/Carousel'

const data: Content[] = [
    {
        title: 'Construimos soluciones a la medida de tus necesidades',
        subtitle: 'Somos Efectivos',
        image: 'img/slider_1.png',
        textarea:
            'Donde otras empresas de software ven código y requerimientos, en Bitzone vemos personas y necesidades. Es por ello que nuestro equipo estará 100% comprometido en el éxito de las soluciones que hagan que tu negocio crezca.',
        link: ''
    },
    {
        title: 'Construimos soluciones escalables, modernas y de calidad',
        subtitle: 'Somos expertos',
        image: 'img/slider_2.png',
        textarea:
            'Nos preocupamos en que nuestros proyectos sean elaborados pensando en el futuro de estos, asegurándonos de que sean completamente mantenibles y escalables al eventual crecimiento de su negocio. Asimismo, seguimos los más altos estándares de calidad para garantizar que nuestro software satisfaga las necesidades de su negocio.',
        link: ''
    },
    {
        title: 'Construimos con valores',
        subtitle: 'Somos humanos',
        image: 'img/slider_3.png',
        textarea:
            'La cultura de Bitzone está enfocada en las personas y su desarrollo. Por ello, priorizamos mantener a nuestros equipos motivados, capacitados en habilidades blandas, comunicados y comprometidos con nuestros proyectos y clientes. No solo somos compañeros de trabajo, somos amigos y somos comunidad.',
        link: ''
    },
    {
        title: 'Construimos en distintas plataformas',
        subtitle: 'Somos versátiles',
        image: 'img/slider_4.png',
        textarea:
            'La cultura de Bitzone está enfocada en las personas y su desarrollo. Por ello, priorizamos mantener a nuestros equipos motivados, capacitados en habilidades blandas, comunicados y comprometidos con nuestros proyectos y clientes. No solo somos compañeros de trabajo, somos amigos y somos comunidad.',
        link: ''
    }
]

export default function Component() {
    return <Carousel content={data} />
}
