import classnames from 'classnames'

interface PropsItem {
    show: boolean
    title: string
    textarea: string
}

function Item({ show, title, textarea }: PropsItem) {
    return (
        <div
            className={classnames('transition duration-700 opacity-0', {
                invisible: !show,
                'h-0': !show,
                visible: show,
                'opacity-100': show
            })}
        >
            <h1 className="text-2xl font-sofia-bold mb-3 text-subtle xl:mb-6">
                {title}
            </h1>
            <p className="text-normal text-subtle">{textarea}</p>
        </div>
    )
}

interface PropsWhyAreContent {
    t: (key: string) => string
    index: number
}

export default function Content({ t, index }: PropsWhyAreContent) {
    return (
        <div style={{ height: '270px' }}>
            <Item
                show={index === 0}
                title={t('We are constantly growing')}
                textarea={t(
                    'We work in an environment where the creativity...'
                )}
            />
            <Item
                show={index === 1}
                title={t('We believe in communication')}
                textarea={t('A successful project is one that...')}
            />
            <Item
                show={index === 2}
                title={t('Continuous improvement')}
                textarea={t('We care that our team is...')}
            />
            <Item
                show={index === 3}
                title={t('We are a motivated team')}
                textarea={t('We seek to be a positive reinforcement agent...')}
            />
            <Item
                show={index === 4}
                title={t('We are looking to train new talents')}
                textarea={t('The constant market demand means...')}
            />
            <Item
                show={index === 5}
                title={t('Flexibility is our motto')}
                textarea={t('We offer our members the possibility of...')}
            />
        </div>
    )
}
