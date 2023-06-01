import { Wrapper } from "@/components/global/Wrapper";
import { RatingStarIcon } from "@/library";
import styles from "../../Hotel.module.scss"
import clsx from "clsx";

interface reviewProps {
  rating: number;
  comment: string;
};

const data = [
  {
    rating: 5,
    comment: "Das Personal war sehr freundlich und höflich, die Räume sauber und gut eingerichtet. Ein Lob auch an die Küche!",
    date: "05 May 2023",
  },
  {
    rating: 3,
    comment: "Das verlängerte Wochenende war sehr erholsam. Das Zimmer war sauber und gemütlich. Das Essen (Halbpension) war super lecker und für jeden Geschmack was dabei. Und das gesamte Personal war sehr freundlich und hilfsbereit. Wir kommen wieder und werden es weiterempfehlen.",
    date: "05 May 2023",
  },
  {
    rating: 5,
    comment: "Sehr stilvolles Ambiente mit Liebe zum Detail. Sehr zuvorkommende Mitarbeiter. Sehr geduldige Damen am Empfang/ Rezeption. Auch Sonderwünsche werden gern erfüllt. Wir kommen wieder!",
    date: "05 May 2023",
  },
  {
    rating: 4,
    comment: "Sehr schöner, erholsamer Aufenthalt. Die Zimmer waren klein, aber fein, sehr sauber, gut ausgestattet, schöne Badezimmer. Das Frühstück war vielfältig, von allem etwas dabei und man kann an einer Station frische Eierspeisen (und Pancakes!) zubereiten lassen. Die Lage des Hotel ist super, wir konnten direkt vor der Tür loswandern und haben tolle Wanderungen gemacht. Abends konnten wir dann in Sauna und Pool relaxen. Toll: Das Wasser ist schön warm.",
    date: "05 May 2023",
  },
]

export const ReviewSection = () => {
  return (
    <Wrapper className="bg-[#FAFAFA]">

      <div className="grid grid-cols-12 gap-4">
        {data.map((item, index) => (
          <div key={index} className="col-span-6 flex flex-col justify-between rounded-xl py-[23px] px-[23px] bg-White min-h-[160px]">
            <div>
              {[...Array(item.rating)].map((i) => (
                <RatingStarIcon key={i} />
              ))}
              <p className={clsx(styles.textSmall)}>{item.comment}</p>
            </div>
            <span className={clsx(styles.roomCapacity, "mt-3 text-[#838383]")}>{item.date}</span>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}