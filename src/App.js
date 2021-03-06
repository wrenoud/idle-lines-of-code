import React from "react";
import "./App.css";

import Console from "./Console";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      achievements: [
        {
          name: "A Good Days Work",
          description: (
            <>
              In the 1975 software project management book,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/The_Mythical_Man-Month"
              >
                The Mythical Man Month: Essays on Software Engineering
              </a>
              , Fred Brooks states that, no matter the programming language
              chosen, a professional developer will write an average 10 lines of
              code (LoC) per day.
            </>
          ),
          threshold: 10,
        },
        {
          name: "A Better Days Work",
          description: (
            <>
              In the Codding Horror blog post{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://blog.codinghorror.com/diseconomies-of-scale-and-lines-of-code/"
              >
                Diseconomies of Scale and Lines of Code
              </a>{" "}
              Jeff Attwood cites a table from Steve McConnell's book that gives
              an upper bound of 25,000 LoC per year. Attwood goes on to quote
              McConnell, "The LOC measure is a terrible way to measure software
              size, except that all the other ways to measure size are worse."
            </>
          ),
          threshold: 100,
        },
        {
          name: "That's All Folks",
          description: "No more upgrades. There are still much higher achievements, but the game hasn't been built to reach them.",
          threshold: 250,
        },
        {
          name: "First code year",
          description:
            "The average programmer is said to write 10,000 lines of new code in a year. At this rate you'll be a superstar programmer in no time.",
          threshold: 10000,
        },
        {
          name: "One Game Neverending",
          description: (
            <>
              That's enough code for one{" "}
              <a href="https://gnespy.com/museum/">GNE</a>
            </>
          ),
          threshold: 10000,
        },
      ],
      upgrades: [
        {
          name: "Coding Camp",
          description:
            "You won't learn much, but at least you'll get some typing practice and a portfolio.",
          effect: "doubles your typing speed",
          cost: 200,
        },
        {
          name: "Discover stackoverflow.com",
          description: "Why write what you can copy.",
          effect: "doubles your typing speed",
          cost: 50,
        },
      ],
      typingRate: 1,
      nloc: 0,
      lifetime_nloc: 0,
    };

    this.addLOC = this.addLOC.bind(this);
  }

  addLOC(loc) {
    this.setState({ nloc: this.state.nloc + loc, lifetime_nloc: this.state.lifetime_nloc + loc });
  }

  handleUpgrade(upgrade_name) {
    const upgrade = this.state.upgrades.find(
      (upgrade) => upgrade.name === upgrade_name
    );

    if(upgrade.cost > this.state.nloc)
      return;

    this.setState({
      typingRate: this.state.typingRate * 2,
      nloc: this.state.nloc - upgrade.cost,
      upgrades: this.state.upgrades.filter(
        (upgrade) => upgrade.name !== upgrade_name
      ),
    });
  }

  render() {
    return (
      <div id="App">
        <div>
          <pre>
            &nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;_____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__
            <br />
            &nbsp;&nbsp;/&nbsp;&nbsp;_/__/&nbsp;/&nbsp;/__&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;(_)__&nbsp;&nbsp;___&nbsp;___&nbsp;&nbsp;&nbsp;___&nbsp;&nbsp;/&nbsp;_/&nbsp;/&nbsp;___/__&nbsp;&nbsp;___/&nbsp;/__
            <br />
            &nbsp;_/&nbsp;//&nbsp;_&nbsp;&nbsp;/&nbsp;/&nbsp;-_)&nbsp;/&nbsp;/__/&nbsp;/&nbsp;_&nbsp;\/&nbsp;-_|_-&lt;&nbsp;&nbsp;/&nbsp;_&nbsp;\/&nbsp;_/&nbsp;/&nbsp;/__/&nbsp;_&nbsp;\/&nbsp;_&nbsp;&nbsp;/&nbsp;-_)
            <br />
            /___/\_,_/_/\__/&nbsp;/____/_/_//_/\__/___/&nbsp;&nbsp;\___/_/&nbsp;&nbsp;&nbsp;\___/\___/\_,_/\__/
            <br />
          </pre>
        </div>
        <div>
          <h1>LoC: {this.state.nloc}</h1>
        </div>
        <Console onAddLOC={this.addLOC} typingRate={this.state.typingRate} />
        <div>
          <h1>Upgrades</h1>
          <div className="UpgradeList">
            {this.state.upgrades
              .filter((upgrade) => upgrade.cost * 0.8 < this.state.nloc)
              .map((upgrade, i) => (
                <div className={`Upgrade ${upgrade.cost <= this.state.nloc ? "Purchasable" : ""}`} key={i} onClick={this.handleUpgrade.bind(this, upgrade.name)}>
                  <h3>
                    {upgrade.name} (Cost: {upgrade.cost} LoC)
                  </h3>
                  <p>{upgrade.description}</p>
                  <p>
                    <i>Effect: {upgrade.effect}</i>
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="Achievements">
          <h1>Achievements</h1>
          <div className="AchievementList">
            {this.state.achievements
              .filter((achievement) => achievement.threshold < this.state.lifetime_nloc)
              .map((achievement, i) => (
                <div className="Achievement" key={i}>
                  <h3>{achievement.name}</h3>
                  <p>
                    You made {achievement.threshold} lines of code (LoC).{" "}
                    {achievement.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
