import '../WeatherForecast.css'
const WeatherData = (props)=>{
    return (

        <>
        
        
          <h2>{props.day}</h2>
          
          <p><span>{props.string1}</span>{props.conditions}</p>
          <p><span>{props.string2}</span>{props.time}</p>
        

        </>
    )
}
export default WeatherData