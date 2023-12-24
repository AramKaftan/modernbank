import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
    <section className="flex flex-1 justify-evenly items-center flex-row flex-wrap mb-5">
        {stats.map((stat) => (
            <div key={stat.id} className={`flex items-center ${styles.flexCenter} flex-row mb-3`}>
                <h4 className={`text-[30px] font-poppins font-semibold text-white mr-3 xs:leading-[50px] leading-[50px]`}>{stat.value}</h4>
                <p className={`text-[15px] font-poppins font-semibold text-gradient uppercase`}>{stat.title}</p>
            </div>
        ))}
    </section>
)

export default Stats;