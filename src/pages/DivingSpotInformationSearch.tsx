import React from "react";

const DivingSpotInformationSearch: React.FC = () => {
    return(
        <>
        <main><div id="contents" className="iwaba">
            <article className="search">
			<header className="header-article-search">
  			<h1>ダイビング情報検索</h1>
			</header>
			<h2>ダイビングスポットを探す</h2>
			
			
            <section className="search_area">		
            <div className="search_title_area t10">
                <h3>絞りこみ条件</h3>
            </div>
            <script>
            </script>
            <form id='feas-searchform-5' action='https://www.climbing-net.com/' method='get' >
            <div className="search_list_area_box clearfix sb1"><h4 className="t10">地域から探す</h4><div className="clearfix t10"> 
            <select name='search_element_1' id='feas_5_1'>
            <option id='feas_5_1_none' value=''>---未指定---</option>
            <option id='feas_5_1_0' className='feas_clevel_01' value='187'  >北海道</option>
            <option id='feas_5_1_1' className='feas_clevel_01' value='188'  >東北</option>
            <option id='feas_5_1_2' className='feas_clevel_01' value='189'  >関東</option>
            <option id='feas_5_1_3' className='feas_clevel_01' value='648'  >伊豆</option>
            <option id='feas_5_1_4' className='feas_clevel_01' value='190'  >甲信越</option>
            <option id='feas_5_1_5' className='feas_clevel_01' value='191'  >北陸</option>
            <option id='feas_5_1_6' className='feas_clevel_01' value='649'  >東海</option>
            <option id='feas_5_1_7' className='feas_clevel_01' value='192'  >近畿</option>
            <option id='feas_5_1_8' className='feas_clevel_01' value='193'  >中国</option>
            <option id='feas_5_1_9' className='feas_clevel_01' value='194'  >四国</option>
            <option id='feas_5_1_10' className='feas_clevel_01' value='195'  >九州</option>
            <option id='feas_5_1_11' className='feas_clevel_01' value='196'  >沖縄</option>
            </select>
            </div></div>
            {/* <div className="search_list_area_box sb2"><h4 className="t10">エリアから探す</h4><div className="t10"> 
            <select name='search_element_2' id='feas_5_2'>
            <option id='feas_5_2_none' value=''>---未指定---</option>
            <option id='feas_5_2_0' className='feas_clevel_01' value='204'  >岩手県</option>
            <option id='feas_5_2_1' className='feas_clevel_01' value='205'  >青森県</option>
            <option id='feas_5_2_2' className='feas_clevel_01' value='206'  >宮城県</option>
            <option id='feas_5_2_3' className='feas_clevel_01' value='207'  >秋田県</option>
            <option id='feas_5_2_4' className='feas_clevel_01' value='208'  >山形県</option>
            <option id='feas_5_2_5' className='feas_clevel_01' value='209'  >福島県</option>
            <option id='feas_5_2_6' className='feas_clevel_01' value='210'  >茨城県</option>
            <option id='feas_5_2_7' className='feas_clevel_01' value='211'  >栃木県</option>
            <option id='feas_5_2_8' className='feas_clevel_01' value='212'  >群馬県</option>
            <option id='feas_5_2_9' className='feas_clevel_01' value='213'  >埼玉県</option>
            <option id='feas_5_2_10' className='feas_clevel_01' value='214'  >千葉県</option>
            <option id='feas_5_2_11' className='feas_clevel_01' value='215'  >東京都</option>
            <option id='feas_5_2_12' className='feas_clevel_01' value='216'  >神奈川県</option>
            <option id='feas_5_2_13' className='feas_clevel_01' value='217'  >新潟県</option>
            <option id='feas_5_2_14' className='feas_clevel_01' value='218'  >富山県</option>
            <option id='feas_5_2_15' className='feas_clevel_01' value='219'  >石川県</option>
            <option id='feas_5_2_16' className='feas_clevel_01' value='220'  >福井県</option>
            <option id='feas_5_2_17' className='feas_clevel_01' value='221'  >山梨県</option>
            <option id='feas_5_2_18' className='feas_clevel_01' value='222'  >長野県</option>
            <option id='feas_5_2_19' className='feas_clevel_01' value='223'  >岐阜県</option>
            <option id='feas_5_2_20' className='feas_clevel_01' value='224'  >静岡県</option>
            <option id='feas_5_2_21' className='feas_clevel_01' value='225'  >愛知県</option>
            <option id='feas_5_2_22' className='feas_clevel_01' value='226'  >三重県</option>
            <option id='feas_5_2_23' className='feas_clevel_01' value='227'  >滋賀県</option>
            <option id='feas_5_2_24' className='feas_clevel_01' value='228'  >京都府</option>
            <option id='feas_5_2_25' className='feas_clevel_01' value='229'  >大阪府</option>
            <option id='feas_5_2_26' className='feas_clevel_01' value='230'  >兵庫県</option>
            <option id='feas_5_2_27' className='feas_clevel_01' value='231'  >奈良県</option>
            <option id='feas_5_2_28' className='feas_clevel_01' value='232'  >和歌山県</option>
            <option id='feas_5_2_29' className='feas_clevel_01' value='233'  >鳥取県</option>
            <option id='feas_5_2_30' className='feas_clevel_01' value='234'  >島根県</option>
            <option id='feas_5_2_31' className='feas_clevel_01' value='235'  >岡山県</option>
            <option id='feas_5_2_32' className='feas_clevel_01' value='236'  >広島県</option>
            <option id='feas_5_2_33' className='feas_clevel_01' value='237'  >山口県</option>
            <option id='feas_5_2_34' className='feas_clevel_01' value='238'  >徳島県</option>
            <option id='feas_5_2_35' className='feas_clevel_01' value='239'  >香川県</option>
            <option id='feas_5_2_36' className='feas_clevel_01' value='240'  >愛媛県</option>
            <option id='feas_5_2_37' className='feas_clevel_01' value='241'  >高知県</option>
            <option id='feas_5_2_38' className='feas_clevel_01' value='242'  >福岡県</option>
            <option id='feas_5_2_39' className='feas_clevel_01' value='243'  >佐賀県</option>
            <option id='feas_5_2_40' className='feas_clevel_01' value='244'  >長崎県</option>
            <option id='feas_5_2_41' className='feas_clevel_01' value='245'  >熊本県</option>
            <option id='feas_5_2_42' className='feas_clevel_01' value='246'  >大分県</option>
            <option id='feas_5_2_43' className='feas_clevel_01' value='247'  >宮崎県</option>
            <option id='feas_5_2_44' className='feas_clevel_01' value='248'  >鹿児島県</option>
            <option id='feas_5_2_45' className='feas_clevel_01' value='249'  >沖縄県</option>
            <option id='feas_5_2_46' className='feas_clevel_01' value='862'  >道北</option>
            <option id='feas_5_2_47' className='feas_clevel_01' value='863'  >道央</option>
            <option id='feas_5_2_48' className='feas_clevel_01' value='864'  >道南</option>
            <option id='feas_5_2_49' className='feas_clevel_01' value='865'  >道東</option>
            </select>
            </div></div> */}
            <form action="/search" method="GET">
                <label htmlFor="searchQuery">フリーワード検索:</label>
                <input type="text" id="searchQuery" name="q" placeholder="キーワードを入力" />
                <button type="submit">検索</button>
            </form>
            <div className="clearfix"><div className="search_list_area_box clearfix  sb1"><h4 className="t10">初心者・中級者OK</h4><div className="t10"> 
                <label htmlFor='feas_5_5_0' className='feas_clevel_01'><input id='feas_5_5_0' type='checkbox' name='search_element_5_0' value='159'  /><span>初心者・中級者OK</span></label>
                <input type='hidden' name='search_element_5_cnt' value='1' /></div></div>
            </div>
            <p className="search_list_area_button">
            <input type='submit' name='searchbutton' id='feas-submit-button-5' className='feas-submit-button' value='上記の条件から検索' />
            </p>
            <input type='hidden' name='csp' value='search_add' />
            <input type='hidden' name='feadvns_max_line_5' value='7' />
            <input type='hidden' name='fe_form_no' value='5' />
            </form>
                </section>
                </article>
            </div>
            
        </main>
        </>
    )
}

export default DivingSpotInformationSearch;