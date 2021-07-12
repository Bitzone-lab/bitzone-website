import { useTranslation } from 'react-i18next'
import Icon from '../../components/Icon'

export default function Header() {
    const { t } = useTranslation()
    return (
        <header className="px-4 pt-28 bg-linear-primary text-white">
            <div className="text-neutral-content pb-11">
                <div className="w-10/12">
                    <p className="mb-8 font-sans font-bold text-sm uppercase">
                        {t('Our projects')}
                    </p>
                    <div className="mb-5">
                        <h1 className="text-2xl font-bold font-sofia ">
                            {t('We improve the world with technology...')}
                        </h1>
                    </div>
                    <p className="mb-7 font-sans font-light text-base">
                        {t("Check out the projects we've done...")}
                    </p>
                    <Icon size={20} name="arrow-down" />
                </div>
            </div>
        </header>
    )
}
