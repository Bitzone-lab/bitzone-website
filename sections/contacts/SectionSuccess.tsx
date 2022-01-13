import Button from '../../components/Button'
import { useRouter } from 'next/router'

export default function SectionSuccess({ t }: { t: (key: string) => string }) {
    const router = useRouter()
    return (
        <div className="bg-white px-4 py-16 mb-10 border-2">
            <div className="mx-auto sm:max-w-xl">
                <h3 className="text-subtle font-bold text-3xl font-sofia text-center mb-4">
                    {t('¡Cool!')}
                </h3>
                <p className="font-light text-subtle font-sans text-base mb-16 text-center">
                    {t('Thank you very much...')}
                </p>
                <div className="flex justify-center">
                    <img
                        width={260}
                        height={190}
                        src="/img/success-contact.svg"
                    />
                </div>
                <div className="flex justify-center">
                    <Button
                        onClick={() => router.push('/')}
                        className="w-full mt-16 px-8 sm:w-auto"
                    >
                        {t('Back to home')}
                    </Button>
                </div>
            </div>
        </div>
    )
}
