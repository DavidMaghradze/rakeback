import React from 'react';
import moment from 'moment';

class RakebackStatus extends React.Component {

    state = {
        days: null,
        hours: null,
        minutes: null,
        points: 0,
        rakeback: 10,
        currentLevel: 1,
        vipValue: '',
        gelValue: '',
        focused: '',
        levels: {
            1: {
                id: 0,
                level: 1,
                minPoints: 0,
                maxPoints: 1000,
                active: true,
                width: 0
            },
        
            2: {
                id: 1,
                level: 2,
                minPoints: 1000,
                maxPoints: 2500,
                active: false,
                width: 0
            },
        
            3: {
                id: 2,
                level: 3,
                minPoints: 2500,
                maxPoints: 6500,
                active: false,
                width: 0
            },
        
            4: {
                id: 3,
                level: 4,
                minPoints: 6500,
                maxPoints: 11500,
                active: false,
                width: 0
            },

            5: {
                id: 4,
                level: 5,
                minPoints: 11500,
                maxPoints: 17500,
                active: false,
                width: 0
            },

            6: {
                id: 5,
                level: 6,
                minPoints: 17500,
                maxPoints: 28000,
                active: false,
                width: 0
            },

            7: {
                id: 6,
                level: 7,
                minPoints: 28000,
                maxPoints: 40000,
                active: false,
                width: 0
            },

            8: {
                id: 7,
                level: 8,
                minPoints: 40000,
                maxPoints: 53500,
                active: false,
                width: 0
            },

            9: {
                id: 8,
                level: 9,
                minPoints: 53500,
                maxPoints: 53500,
                active: false,
                width: 0
            }
        }
    }

    setDateTimer = () => {
        const currentDateTime = moment();
        const currentYear = currentDateTime.year();
        const currentMonth = currentDateTime.month();

        const lastDayOfCurrentMonth = new Date(currentYear, currentMonth + 1, 0);
        const lastDayOfCurrentMonthFormated = moment(lastDayOfCurrentMonth);

        const diff = lastDayOfCurrentMonthFormated.diff(currentDateTime);
        const duration = moment.duration(diff);

        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        this.setState({ days, hours, minutes })
    }

    calculateWidth = (points, minPoints, maxPoints) => {
        if(points < minPoints) {
            return 0;
        }

        if(points >= maxPoints) {
            return 100;
        }

        if(points > minPoints && points < maxPoints) {
            const currentStagePoints = maxPoints - minPoints;
            const currentStageActivePoints = points - minPoints;
            const width = (currentStageActivePoints * 100) / currentStagePoints;
            return width;
        }
    }

    setWidth = () => {
        const levels = {...this.state.levels};
        
        for(let item in levels) {
           levels[item].width = this.calculateWidth(this.state.points, levels[item].minPoints, levels[item].maxPoints);
        }

        this.setState({ levels })
    }

    updateLevel = (level) => {
        let rakeback = '';
        const levels = {...this.state.levels}
        const updatedLevel = {...levels[level]}
        updatedLevel.active = true;
        levels[level] = updatedLevel;

        switch(level) {
            case 1 : rakeback = 10; break
            case 2 : rakeback = 15; break;
            case 3 : rakeback = 20; break;
            case 4 : rakeback = 25; break;
            case 5 : rakeback = 30; break;
            case 6 : rakeback = 35; break;
            case 7 : rakeback = 40; break;
            case 8 : rakeback = 45; break;
            case 9 : rakeback = 50; break;
            default : rakeback = 0;
        }

        this.setState({
            currentLevel: level,
            levels,
            rakeback
        })
    }

    startRakeback = () => {
        let points = this.state.points;

        if(points>=0) {
            this.updateLevel(1);
        }

        if(points>=1000) {
            this.updateLevel(2);
        }

        if(points>=2500) {
            this.updateLevel(3);
        }

        if(points>=6500) {
            this.updateLevel(4);
        }

        if(points>=11500) {
            this.updateLevel(5);
        }

        if(points>=17500) {
            this.updateLevel(6);
        }

        if(points>=28000) {
            this.updateLevel(7);
        }

        if(points>=40000) {
            this.updateLevel(8);
        }

        if(points>=53500) {
            this.updateLevel(9);
            return false
        }

        points+=500;
        this.setState({ points })
    }

    componentDidMount(){
        this.setDateTimer();

        setInterval(() => {
            this.setWidth();
        }, 0);

        setInterval(() => {
            this.setDateTimer();
            this.startRakeback();
        }, 1000);
    }

    vipPointsToGel = (vipValue) => {
        const vipPointsInGel = (vipValue / 100).toFixed(2);
        this.setState({ gelValue: vipPointsInGel  })
    }

    gelToVipPoints = (gelValue) => {
        const gelInVipPoints = (gelValue * 100);
        this.setState({ vipValue: gelInVipPoints  })
    }

    onInputChange = (e) => {
        const { value, name } = e.target;

        if(!isNaN(value) && value <= this.state.points) {
            this.setState({ [name]: value }, () => {
                const { vipValue, gelValue, focused } = this.state;
                if(vipValue && focused==="vipValue") {
                    this.vipPointsToGel(vipValue);
                }
    
                if(gelValue && focused==="gelValue") {
                    this.gelToVipPoints(gelValue);
                }
            })
        }
    }

    onFocus = (e) => {
        const { name } = e.target;

        this.setState({ focused: name })
    }

    render(){
        let levelsArr = [];
        for(let item in this.state.levels) {
            levelsArr.push(this.state.levels[item]);
        }
        
        return (
            <div className="rakeback-status">
                <p className="rakeback__description">ყველა მოთამაშე იწყებს 1 რანგით და გარანტირებულად იღებს <span>10% რეიკბექს</span></p>    
                <div className="rakeback__container">
                    <div className="rakeback__status-wrapper">
                        <header className="rakeback__status-header">
                            <div className="rakeback__timer">
                                <p>
                                    თვის დასრულებამდე დარჩა
                                </p>
                                <div className="rakeback__timer-time">
                                    <div className="rakeback__timer-days">
                                        <span>{this.state.days}</span>
                                        დღე
                                    </div>
                                    <div className="rakeback__timer-hours">
                                        <span>{this.state.hours}</span>
                                        საათი
                                    </div>
                                    <div className="rakeback__timer-minutes">
                                        <span>{this.state.minutes}</span>
                                        წუთი
                                    </div>
                                </div>
                            </div>
                            <div className="rakeback__status-header-actions">

                            </div>
                        </header>
                        <section className="rakeback-game">
                            <header className="rakeback-game__current-stats">
                                <div className="rakeback-game__current-level">
                                    <p>ჩემი VIP დონე</p>
                                    <span className="level level--large">{this.state.currentLevel}</span>
                                </div>
                                <div className="rakeback-game__current-points">
                                    <p>თვის დაგროვილი ქულა<span>{this.state.points}</span></p>
                                    <p>წლის დაგროვილი ქულა<span>500</span></p>
                                </div>
                            </header>
                            <div className="rakeback-game__levels">
                                {
                                    levelsArr.map(level=>(
                                        <div className="level-wrapper">
                                            <span className={`level level--small ${level.active ? 'active' : ''}`}>
                                                {level.level}
                                                <div className="tooltip">Level {level.level}</div>
                                            </span>
                                            <div className="rakeback-game__progress-bar">
                                                <div className="rakeback-game__progress" style={{width: `${level.width!==0 ? `calc(${level.width}% + 30px)` : '0'}`}}></div>
                                            </div>
                                            <div className="points">
                                                <span className="point">{level.minPoints}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="rakeback-game__current-rakeback">
                                <p><span>Rakeback:</span> {this.state.rakeback}%</p>
                            </div>
                        </section>
                        <footer className="rakeback__footer">
                            <p className="rakeback__footer-points">ხელმისაწვდომი ქულები <span>{this.state.points}</span></p>
                            <form className="rakeback__form">
                                <div className="rakeback__formfields">
                                    <div className="field">
                                        <label>VIP ქულები</label>
                                        <input
                                            type="text"
                                            name='vipValue'
                                            value={this.state.vipValue}
                                            onChange={this.onInputChange}
                                            onFocus={this.onFocus}
                                        />
                                        {
                                            this.state.vipValue==this.state.points && <span className="max">MAX</span>
                                        }
                                    </div>
                                    <div className="exchange">
                                        <img src="/img/exchange.png" alt="exchange icon" />
                                    </div>
                                    <div className="field">
                                        <label>თანხა</label>
                                        <input
                                            type="text"
                                            name="gelValue"
                                            value={this.state.gelValue}
                                            onChange={this.onInputChange}
                                            onFocus={this.onFocus}
                                        />
                                    </div>
                                </div>
                                <button className="btn btn--orange">exchange</button>
                            </form>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
};

export default RakebackStatus;