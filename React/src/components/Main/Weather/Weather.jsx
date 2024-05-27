import"./Weather.css";

export default function Weather() {

    return(
    <div className="weather-page">
        <section className="weather">
            <p className="top-text">あなたの地域のお天気</p>
            <div className="weather_content">
                <p>Tokyo:25°</p>
                <date>5/28 2024</date>
                <div className="weather_week">
                    <div className="day">
                        <p>月</p>
                        <img></img>
                        <p>25°</p>
                    </div>
                    <div className="day">
                        <p>月</p>
                        <img></img>
                        <p>25°</p>
                    </div>
                    <div className="day">
                        <p>月</p>
                        <img></img>
                        <p>25°</p>
                    </div>
                    <div className="day">
                        <p>月</p>
                        <img></img>
                        <p>25°</p>
                    </div>
                    <div className="day">
                        <p>月</p>
                        <img></img>
                        <p>25°</p>
                    </div>
                </div>
            </div>
            <button className="weather-button">地域を再設定</button>
        </section>
        <section className="weather">
            <p className="top-text">お出かけ先のお天気</p>
            <div className="weather_content">
                <p>Tokyo:25°</p>
                <date>5/28 2024</date>
                <div className="weather_week">
                    <div className="day">
                        <p>月</p>
                        <img></img>
                        <p>25°</p>
                    </div>
                    <div className="day">
                        <p>月</p>
                        <img></img>
                        <p>25°</p>
                    </div>
                    <div className="day">
                        <p>月</p>
                        <img></img>
                        <p>25°</p>
                    </div>
                    <div className="day">
                        <p>月</p>
                        <img></img>
                        <p>25°</p>
                    </div>
                    <div className="day">
                        <p>月</p>
                        <img></img>
                        <p>25°</p>
                    </div>
                </div>
            </div>
            <button className="weather-button">お出かけ先を再設定</button>
        </section>
    </div>

    )
}