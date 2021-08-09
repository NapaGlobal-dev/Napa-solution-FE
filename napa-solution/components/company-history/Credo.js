import { getData } from "../../util/converArrayToObject"

export default function Credo({data}){
    // const history = getData(data, /CompanyHistory_History/)
    return(
        <div className='containerD'>
            <h1 className='titleD'>Credo</h1>
            <div className='subtitleD'>クレド</div>
            <div className='rowD'>
                <div className='leftColumn'>1. Win-Winの原則</div>
                <div className='rightColumn'>私たちは、事業に関わる人すべてに幸福と成功をもたらすようベストを尽くします</div>
            </div>
            <div className='rowD'>
                <div className='leftColumn'>2. 先取りの精神</div>
                <div className='rightColumn'>私たちは、新しいことに挑戦しつづける精神を持ち続けます</div>
            </div>
            <div className='rowD'>
                <div className='leftColumn'>3. 貢献へのフォーカス</div>
                <div className='rightColumn'>私たちは、すべての仕事の意味と成果を、社会への貢献と結びつけます</div>
            </div>
            <div className='rowD'>
                <div className='leftColumn'>4. 強みへのフォーカス</div>
                <div className='rightColumn'>私たちは、自らの強みを活かせる分野に特化します</div>
            </div>
            <div className='rowD'>
                <div className='leftColumn'>5. 自律と自立</div>
                <div className='rightColumn'>私たちは、メンバー個々人が自律的・自立的に行動し、職務を全うします</div>
            </div>
            <div className='rowD'>
                <div className='leftColumn'>6. 他者への尊敬</div>
                <div className='rightColumn'>私たちは、メンバー個々人の価値観と存在を理解・尊重し、互いの成長を喜びます</div>
            </div>
            <div className='rowD'>
                <div className='leftColumn'>7. 社会的存在</div>
                <div className='rightColumn'>私たちは、誠実な会社であると社会から信頼され尊敬される存在でありつづけます</div>
            </div>
            <div className='rowD'>
                <div className='leftColumn'>8. 成果主義</div>
                <div className='rightColumn'>私たちは、貢献と成果に応じて自らを評価します</div>
            </div>
            <div className='rowD'>
                <div className='leftColumn'>9. 妥協しない</div>
                <div className='rightColumn'>私たちは、常に、考えうる最高の品質をご提供します</div>
            </div>
            <div className='rowD-end'>
                <div className='leftColumn'>10. できないではなく、やり方を考える</div>
                <div className='rightColumn'>私たちは、できないではなく、やり方を考えます。また、より良い方法を模索しつ づけます</div>
            </div>
        </div>
    )
}