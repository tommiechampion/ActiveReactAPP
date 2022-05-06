import React, { useState } from 'react';
import Chart from "../../components/chart/Chart";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import "./home.css";
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import VerticalSlider from '../../components/verticalslider/VerticalSlider';

export default function Home(props) {
  const [sliderValue, setSliderValue] = useState (1);
  const getSliderValue = (value) => {
    setSliderValue(value);
  };

  const calculateNewMonth = (month) => {
    const activeUserValue = sliderValue * month["Active User"];
    const newMonthValue = { ...month, "Active User": activeUserValue };

    return newMonthValue;
  };

  const userDataTransform = userData.map(calculateNewMonth);
  return (
    <div className="home">
        <Featuredinfo/>

        <h3 className="chartTitle">User Analytics</h3>
    <div className='chartSliderContainer'> 
    <VerticalSlider onValueSet={getSliderValue} className="chartSlider" />
        <Chart data={userDataTransform} title="User Analytics" grid dataKey="Active User"></Chart>
        </div>
        <div className='homeWidgets'>
        <WidgetSm></WidgetSm>
        <WidgetLg></WidgetLg>
        </div>
    </div>
  )
}
