import {useTranslation} from "next-i18next";


export default function Home() {
  const { t } = useTranslation('common')
  return (
      <h1 className="text-2xl">{t("Hallo")}</h1>
  )
}
