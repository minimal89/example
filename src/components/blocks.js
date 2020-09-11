import React from "react"
import "./blocks.scss";
import globe from '../images/globe.gif';
import statistic from '../images/statistics.png';
import impact2 from '../images/impact_2.png';
import laptop from '../images/laptop.png';
import recognize from '../images/recognize.png';

const Blocks = () => (
  <>
    <div className="paddingClass">
      <div className="block block-space block-space-lg">
        <div className="flex flex-sm-column flex-md-row">
          <div className="col col-sm-12 col-md-7">
            <h2 className="orange">Your reputation is <br className="br" /> everything. Make sure it’s <br className='br' />protected, globally</h2>
            <p>Talkwalker is your extra set of eyes and ears. Its AI powered <br className="br" /> analysis provides real time insights into what's happening on all <br className="br" /> social channels and online media, across 187 languages. This<br className="br" />  enables you to quickly identify issues and complaints before a <br className="br" /> crisis hits.</p>
            <a href="#" className="btn btn-lg">Protect you reputation</a>
          </div>
          <div className="col col-sm-12 col-md-5">
            <img src={globe} alt="" style={{ width: '100%'}}/>
          </div>
        </div>
      </div>
      <div className="block block-space block-space-lg">
        <div className="flex flex-sm-column flex-md-row-reverse">
          <div className="col col-sm-12 col-md-5">
            <h2 className="skyblue">Your social media presence<br className="br" /> is paramount. Measure its<br className="br" /> impact</h2>
            <p>Benchmark your brand and campaigns with our proven KPI <br className="br" /> frameworks. Measure sentiment and brand health. Connect social <br className="br" /> efforts to real business results and provide your management <br className="br" />with instant reports. Compare your results to the competition, <br className="br" />across every channel. Discover what customers really think about <br className="br" />your brands and products in real time.</p>
            <a href="#" className="btn btn-lg">Measure Your Impact</a>
          </div>
          <div className="col col-sm-12 col-md-7">
            <img src={statistic} alt="" style={{ width: '100%'}}/>
          </div>
        </div>
      </div>
      <div className="block block-space block-space-lg">
        <div className="flex flex-sm-column flex-md-row">
          <div className="col col-sm-12 col-md-7">
            <h2 className="rose">Brand impact has moved full<br className="br" /> digital. Promote and profit.</h2>
            <p>Maximize the social performance of your communication <br className="br" />campaigns with data-driven technology.<br className="br" /><br className="br" />
              Find the best stories and the true influencers to boost your brand <br className="br" />power. With Quick Search, spot the trending stories on your brand <br className="br" />and industry, in real time. Amplify your brand <br className="br" />message for one global impact with Influencer One <br className="br" />- one influencer marketing hub <br className="br" />for a simpler workflow and measurable ROI metrics.</p>
            <a href="#" className="btn btn-lg">Promote your brand</a>
          </div>
          <div className="col col-sm-12 col-md-5">
            <img src={impact2} alt="" style={{ width: '100%'}}/>
          </div>
        </div>
      </div>
      <div className="awardsWinning block block-space flex flex-column align-items-center">
        <h2 className="blue">Our multi-award winning platform</h2>
        <div className="award">
          <img src={laptop} alt="" />
        </div>
        <h3 className="blue">As recognized by</h3>
        <div className="recognize">
          <img src={recognize} alt=""/>
        </div>
      </div>
    </div>
  </>
)
export default Blocks
