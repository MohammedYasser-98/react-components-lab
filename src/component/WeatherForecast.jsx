import './WeatherForecast.css'
import WeatherData from './components/WeatherData'
import WeatherIcon from './components/WeatherIcon'

const WeatherForecastFun = (props)=>{
    const string1 = 'conditions: '
    const string2 = 'time: '
    return (

        <>
        <section>

        
                <div className="weather">



                 <WeatherData
                
                 day={props.day}
                 
         
                 />


                 <WeatherIcon

                 img={props.img}
                 imgAlt={props.imgAlt}   

                 />

                  <WeatherData
                
                   
                   conditions={props.conditions}
                   time={props.time}
                   string1={string1}
                   string2={string2}
                 />



                </div>
                
            


        </section>



        </>
    )
}
export default WeatherForecastFun