let likertSeven = [
    {
    "value": "correct",
    "content": "Ich stimme überhaupt nicht zu"
    },
    {
        "value": "correct",
        "content": "Ich stimme überwiegend nicht zu"
    },
    {
        "value": "correct",
        "content": "Ich stimme eher nicht zu"
    },
    {
        "value": "correct",
        "content": "Ich habe keine Präferenz"
    },
    {
        "value": "correct",
        "content": "Ich stimme eher zu"
    },
    {
        "value": "correct",
        "content": "Ich stimme überwiegend zu"
    },
    {
        "value": "correct",
        "content": "Ich stimme vollkommen zu"
    }];

let badges = [
    {
        "id": 0,
        "position": -1,
        "title": "Empty",
        "text": "Lorem Ipsum dolor sit",
        "image": "../images/badges/badge_empty.png",
    },
    {
        "id": 1,
        "position": 0,
        "title": "Los geht's",
        "text": "Tutorial beendet.",
        "image": "../images/badges/badge_start@3x.png",
    },
    {
        "id": 2,
        "position": 1,
        "title": "Weiße Weste",
        "text": "Du hast dein Einkommen korrekt versteuert. Weiter so!",
        "image": "../images/badges/badge_honesty@3x.png",
    },
    {
        "id": 3,
        "position": 1,
        "title": "Unbemerkt",
        "text": "Du hast durch gerissenes Vorgehen Steuern gespart. Riskant!",
        "image": "../images/badges/badge_evasion@3x.png",
    },
    {
        "id": 4,
        "position": 2,
        "title": "Top-Verdiener/in",
        "text": "Du gehörst zu den 10% der Teilnehmer/innen, die am meisten EcoBucks verdient haben!",
        "image": "../images/badges/badge_money@3x.png",
    },
    {
        "id": 5,
        "position": 3,
        "title": "Finale",
        "text": "Du hast den Fragebogen erfolgreich beendet!",
        "image": "../images/badges/badge_completion@3x.png",
    },
];

let educationLevels = [
    {
        "id": 1,
        "content": "Kein Abschluss"
    },
    {
        "id": 2,
        "content": "Pflichtschule"
    },
    {
        "id": 3,
        "content": "Matura (AHS / HTL)"
    },
    {
        "id": 4,
        "content": "Matura (HAK / HBLA)"
    },
    {
        "id": 5,
        "content": "Universität (Magister, Bachelor, Master)"
    },
    {
        "id": 6,
        "content": "Doktorat / PhD"
    },

]
let flags = [
    {
        "id": 0,
        "content": "Österreich",
        "person": "Österreicher/in",
        "flag": "../images/austria_large.png"
    },
    {
        "id": 1,
        "content": "Tschechische Republik",
        "person": "Tscheche/in",
        "flag": "../images/czech_large.png"
    },
    {
        "id": 2,
        "content": "Frankreich",
        "person": "Franzose/in",
        "flag": "../images/france_large.png"
    },
    {
        "id": 3,
        "content": "Deutschland",
        "person": "Deutscher/e",
        "flag": "../images/germany_large.png"
    },
    {
        "id": 4,
        "content": "Italien",
        "person": "Italiener/in",
        "flag": "../images/italy_large.png"
    },
    {
        "id": 5,
        "content": "Liechtenstein",
        "person": "Liechtensteiner/in",
        "flag": "../images/liechtenstein_large.png"
    },
    {
        "id": 6,
        "content": "Slowakei",
        "person": "Slowake/in",
        "flag": "../images/slovakia_large.png"
    },
    {
        "id": 7,
        "content": "Slowenien",
        "person": "Slowene/in",
        "flag": "../images/slovenia_large.png"
    },
    {
        "id": 8,
        "content": "Schweiz",
        "person": "Schweizer/in",
        "flag": "../images/switzerland_large.png"
    },
    {
        "id": 9,
        "content": "Türkei",
        "person": "Türke/in",
        "flag": "../images/turkey_large.png"
    }
];

let data = {
    "title": "Flag Priming Questionnaire",
    "modes": ["noFlag", "noFit", "flagFit"],
    "itemBlocks": [
        {
            /*Item Block 1 - Introduction */
            "iblock": 101,
            "title": "Fragebogen Flag Priming und Tax Compliance",
            "explanationText": "Vielen Dank für dein Interesse und deiner Teilnahme am Fragebogen 'Flag Priming und Tax Compliance'! In diesem Fragebogen werden einige demographische Daten erhoben, und temporär zu Forschungszwecken gespeichert. Es werden keine personenbezogenen Daten gespeichert, und ein Rückschluss auf deine Identität ist nicht möglich. Die Daten werden im Rahmen einer Masterarbeit im Bereich der Wirtschaftspsychologie veröffentlicht. Du bestätigst mit dem Klicken auf das Item unterhalb, dass du die Teilnahmebedingungen gelesen hast, und mit ihnen einverstanden bist.",
            "image": "null",
            "maximumValue": 0,
            "role": "intro",
            "questions": [
                {
                    "id": 1,
                    "qname": "agb_confirm",
                    "qtype": "RadioItem",
                    "content": "",
                    "items": [
                        {
                            "value": "correct",
                            "content": "Ich habe die Teilnahmebedingungen gelesen und bin mit ihnen einverstanden."
                        }]
                }
            ],
            "reward": {
                "type": "none",
                "number": 0,
                "condition": true
            }
        },
        {
            "iblock": 102,
            "title": "Tutorial - EcoBucks",
            "explanationText": "In diesem Fragebogen kannst du durch gute Leistungen virtuelles Geld (sog. EcoBucks mit Währungszeichen §) verdienen. Dein Kontostand wird in der rechten oberen Ecke angezeigt. Wenn du mit einer Frage Geld verdienen kannst, wirst du vorher darauf hingewiesen. Am Ende des Fragebogens kannst du dir mit deinem verdienten Geld Lose für ein Gewinnspiel kaufen - eine gute Leistung zahlt sich somit aus. ;)",
            "image": "null",
            "maximumValue": 0,
            "role": "tutorial",
            "questions": [
                {
                    "id": 1,
                    "qname": "tut1_confirm",
                    "qtype": "RadioItem",
                    "content": "Welche Aussage stimmt? Beantworte die Frage richtig, um 100 § zu verdienen!",
                    "items": [
                        {
                            "value": "false",
                            "content": "EcoBucks sind absolut sinnlos."
                        },
                        {
                            "value": "correct",
                            "content": "Man sollte versuchen, möglichst viele EcoBucks zu erlangen."
                        }]
                }
            ],
            "reward": {
                "type": "ecobucks",
                "number": 100,
                "condition": true
            }
        },
        {
            "iblock": 103,
            "title": "Tutorial - Badges",
            "explanationText": "Für besondere Leistungen bekommst du Badges, kleine Abzeichen, die oben in der Mitte dargestellt werden. Badges sind 'Sammelobjekte', die du dir dazuverdienen kannst. Sie haben keinen Wert in EcoBucks, und sind optional. Schaffst du es, alle fünf Badges zu erlangen?",
            "image": "null",
            "maximumValue": 0,
            "role": "tutorial",
            "questions": [
                {
                    "id": 1,
                    "qname": "tut2_confirm",
                    "qtype": "RadioItem",
                    "content": "Welche Aussage stimmt? Beantworte die Frage richtig, um deine erste Badge zu verdienen!",
                    "items": [
                        {
                            "value": "false",
                            "content": "Jede Badge ist 1250 § wert"
                        },
                        {
                            "value": "correct",
                            "content": "Badges sind zusätzliche Ziele, die nicht zwangsweise erfüllt werden müssen."
                        }, {
                            "value": "false",
                            "content": "Ich brauche alle fünf Badges, um Pokemon-Meister zu werden."
                        }]
                }
            ],
            "reward": {
                "type": "badge",
                "number": 1,
                "condition": true
            }
        },
        {
            "iblock": 104,
            "title": "Tutorial",
            "explanationText": "Das waren alle Erklärungen, die ich loswerden wollte. Du bist nun bereit, am Fragebogen teilzunehmen!",
            "image": "null",
            "maximumValue": 0,
            "role": "tutorial",
            "questions": [],
            "reward": {
                "type": "none",
                "number": 0,
                "condition": true
            }
        },
        {
            /*Item Block 1 - Demographics */
            "iblock": 105,
            "title": "Persönliche Daten",
            "explanationText": "Bitte fülle die Fragen aus. Wie bereits gesagt, die Daten werden gespeichert. Ein Rückschluss auf deine Person ist jedoch nicht möglich.",
            "image": "null",
            "maximumValue": 0,
            "role": "items",
            "questions": [
                {
                    "id": 1,
                    "qname": "age",
                    "qtype": "TextItem",
                    "input": "number",
                    "content": "Wie alt bist du (Alter in Jahren)?"
                },
                {
                    "id": 2,
                    "qname": "gender",
                    "qtype": "RadioItem",
                    "content": "Geschlecht: ",
                    "items": [{
                        "value": "correct",
                        "content": "Männlich"
                    }, {
                        "value": "correct",
                        "content": "Weiblich"
                    }, {
                        "value": "correct",
                        "content":"Andere"
                    }]
                },
                {
                    "id": 3,
                    "qname": "nationality",
                    "qtype": "DropdownItem",
                    "content": "Staatsbürgerschaft: ",
                    "items": flags
                },
                {
                    "id": 4,
                    "qname": "education",
                    "qtype": "DropdownItem",
                    "content": "Höchster abgeschlossener Bildungsgrad: ",
                    "items": educationLevels
                }
            ],
            "reward": {
                "type": "none",
                "number": 0,
                "condition": true
            }
        },
        {
            /*Item Block 2 - Flag Priming Qestions*/
            "iblock": 106,
            "title": "Design einer Nationalflagge",
            "explanationText": "In diesem Teil geht es darum, eine Nationalflagge zu beurteilen. Dabei sollten Sie Aussagen über das Design, die Farben und Ihre persönliche Einschätzung abgeben. Bitte geben Sie an, wie sehr Sie den folgenden Aussagen zustimmen würden!",
            "image": "../images/austria_large.png",
            "maximumValue": 0,
            "role": "flags",
            "questions": [
                {
                    "id": 1,
                    "qname": "flagDesign",
                    "qtype": "RadioItem",
                    "content": "Diese Flagge hat ein gutes Design.",
                    "items": likertSeven
                },
                {
                    "id": 2,
                    "qname": "flagColor",
                    "qtype": "RadioItem",
                    "content": "Diese Flagge ist farblich ansprechend.",
                    "items": likertSeven
                },
                {
                    "id": 3,
                    "qname": "flagAppeal",
                    "qtype": "RadioItem",
                    "content": "Diese Flagge gefällt mir gut.",
                    "items": likertSeven
                }
            ],
            "reward": {
                "type": "none",
                "number": 0,
                "condition": true
            }
        },
        {
            /* */
            "iblock": 106,
            "title": "Politische Einstellungen",
            "explanationText": "In diesem Teil geht es darum, einige politische Einstellungen anzugeben. Du wirst einige Aussagen präsentiert bekommen, und sollst angeben, wie sehr du diesen Aussagen zustimmen würdest. Dabei gibt es keine richtigen und falschen Antworten - uns interessiert lediglich deine Meinung! Für die Beantwortung der Fragen bekommst du 200 § gutgeschrieben!",
            "image": "null",
            "maximumValue": 0,
            "role": "natPat",
            questions: [
                {
                    "id": 1,
                    "qname": "nat1",
                    "qtype": "RadioItem",
                    "content": "Es ist wichtig für mich, ein/e {hey} zu sein.",
                    "items": likertSeven
                },
                {
                    "id": 2,
                    "qname": "nat2",
                    "qtype": "RadioItem",
                    "content": "Ich sehe mich als typische/n {hey}",
                    "items": likertSeven
                },
                {
                    "id": 3,
                    "qname": "nat3",
                    "qtype": "RadioItem",
                    "content": "Der Begriff {hey} beschreibt mich gut.",
                    "items": likertSeven
                },
                {
                    "id": 4,
                    "qname": "pat1",
                    "qtype": "RadioItem",
                    "content": "Ich glaube daran, das zu tun, was das Beste für mein Land ist.",
                    "items": likertSeven
                },
                {
                    "id": 5,
                    "qname": "pat2",
                    "qtype": "RadioItem",
                    "content": "Meinem Land zu dienen bedeutet auch, etwas zu tun, was ich nicht möchte.",
                    "items": likertSeven
                },
                {
                    "id": 6,
                    "qname": "flagAppeal",
                    "qtype": "RadioItem",
                    "content": "Es ist wichtig, dem Land auszuhelfen, auch wenn es gegen meine persönlichen Wünsche geht.",
                    "items": likertSeven
                }
            ],
            "reward": {
                "type": "ecoBucks",
                "number": 200,
                "condition": true
            }
        },
        {
            /* Item Block 3 - Slider items */
            "iblock": 107,
            "title": "Slider-Aufgaben",
            "explanationText": "Lorem ipsum dolor sit",
            "image": "null",
            "maximumValue": 1,
            "role": "items",
            "questions": [
                {
                    "id": 1,
                    "qname": "slider1",
                    "qtype": "SliderItem",
                    "content": "Stellen Sie den Slider so ein, dass der Wert auf genau 60% steht!",
                    "sliderGoal": 60
                },
                {
                    "id": 2,
                    "qname": "slider2",
                    "qtype": "SliderItem",
                    "content": "Stellen Sie den Slider so ein, dass der Wert auf genau 35% steht!",
                    "sliderGoal": 35
                },
                {
                    "id": 3,
                    "qname": "slider3",
                    "qtype": "SliderItem",
                    "content": "Stellen Sie den Slider so ein, dass der Wert auf genau 10% steht!",
                    "sliderGoal": 10
                }
            ],
            "reward": {
                "type": "none",
                "number": 0,
                "condition": true
            }
        },
        {
            /* Item Block 4 - Audit */
            "iblock": 108,
            "title": "Steuerprüfung",
            "explanationText": "Deine Einkünfte sollten nun versteuert werden! Im Fragebogen solltest du auf freiwilliger Basis angeben, wie viel du verdient hast. " +
                "Von der Summe, die du im Textfeld unten angibst, werden automatisch 20% abgezogen. Achtung: Für 10% aller Teilnehmer/innen wird eine automatische Steuerprüfung durchgeführt!" +
                "Sollte sich zeigen, dass du weniger Geld versteuert hast, als du verdient hast, musst du eine Strafzahlung von 4000 § ableisten. Die Strafzahlung wird automatisch von deinem Konto abgezogen.",
            "image": "null",
            "role": "audit",
            "questions": [],
            "reward": {
                "type": "badge",
                "number": 0,
                "condition": true
            }
        },
        {
            /* Item Block 5 - End */
            "iblock": 109,
            "title": "Ende",
            "explanationText": "Vielen Dank für Ihre Teilnahme!!",
            "image": "null",
            "role": "end",
            "questions": [],
            "reward": {
                "type": "none",
                "number": 0,
                "condition": true
            }
        }
    ]
}

class Game extends React.Component {
    /*
    States:
    gameScore (Int): Keeps track of the game score

    Properties:
    data (JSON): Import of the data JSON file.

     */
    constructor(props) {
        super(props);
        /*
        This part sets up the game. it selects a random mode.
         */
        let data = this.props.data;
        let modes = data.modes;
        console.log(modes);
        let mode = "noFlag"; //modes[Math.floor(Math.random() * modes.length)]; //selects a random mode.


        var badgeArray = [];
        for (let i = 0; i < 4; i++) {
            let emptyBadge = this.props.badges[0];
            badgeArray.push(emptyBadge);
        }
        this.state = {
            gameScore: 100,
            mode: mode.valueOf(),
            badgeArray: badgeArray,
            currentFlag: null
        };

        console.log(this.state.mode);


        this.increaseScore = this.increaseScore.bind(this);
        this.decreaseScore = this.decreaseScore.bind(this);
        this.handleAudit = this.handleAudit.bind(this);
        this.changeFlagDisplay = this.changeFlagDisplay.bind(this);
        this.activateBadge = this.activateBadge.bind(this);
    }

    changeFlagDisplay(flagData) {
        let flagDataJSON = JSON.parse(flagData);
        let imageURL = flagDataJSON.flag;
        console.log("Reached notifyChanges in G with: " + imageURL.valueOf());

        this.setState({currentFlag: imageURL});

    }

    increaseScore(number) {
        console.log("called increaseGS from Questionnaire!");
        let currentScore = this.state.gameScore;
        let newScore = currentScore.valueOf() + number.valueOf();
        this.setState({gameScore: newScore.valueOf()});
    }

    decreaseScore(number) {
        console.log("Decreasing Score by " + number);
        let currentScore = this.state.gameScore;
        var newScore = currentScore.valueOf() - number.valueOf();
        newScore = newScore < 0 ? 0 : newScore;
        this.setState({gameScore: newScore.valueOf()});
    }

    handleAudit(isAudited, number) {
        let currentScore = this.state.gameScore;
        if (isAudited) {
            if (number.valueOf() < currentScore) {
                alert("Bei der Steuerprüfung wurde festgestellt, dass Du deine Verdienste falsch angegeben hast. Es wurde dir eine Strafe von 4000§ erteilt.");
                this.decreaseScore(4000);
            }
            else {
                alert("Bei der Steuerprüfung wurden keine Verstöße festgestellt. Es werden regelgemäß 20% des angegbebenen Betrags abgezogen.");
                let taxAmount = number * 0.2;
                this.decreaseScore(taxAmount);
            }
        }
        else {
            alert("Du wurdest nicht geprüft. Es werden regelgemäß 20% des angegebenen Betrags abgezogen.");
            let taxAmount = number * 0.2;
            this.decreaseScore(taxAmount);
        }

    }

    activateBadge(number) {
        if (number < this.props.badges.length) { //safety check
            let badgeToAdd = this.props.badges[number];
            var currentBadgeArray = this.state.badgeArray;
            currentBadgeArray[badgeToAdd.position] = badgeToAdd;
            this.setState({badgeArray: currentBadgeArray});
        }
    }

    render() {
        let flagContainer = this.state.mode === "noFlag" ? "" : <div id="flagContainer"><img id="flagThumbnail" src={this.state.currentFlag} alt=""/></div>;
        let badgeArray = this.state.badgeArray;
        return (
            <div>
                <Header gameScore={this.state.gameScore} badgeArray={badgeArray}/>
                {flagContainer}
                <div className="appContainer">
                    <div className="row questionnaireContainer">
                        <Questionnaire increaseScore={this.increaseScore}
                                       handleAudit={this.handleAudit}
                                       notifyFlagDisplay={this.changeFlagDisplay}
                                       activateBadge={this.activateBadge}
                                       mode={this.state.mode}
                                       flags={this.props.flags}/>
                    </div>
                </div>


            </div>
        );
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light" id="header">

                <div id="logoContainer">
                    <img src="../images/uni_Logo_2016.jpg" id="headerLogo" alt=""/>
                </div>
                <div id="badgeContainer">
                    <BadgeContainer badgeArray={this.props.badgeArray}/>
                </div>
                <div id="accountContainer">
                    <p>Dein derzeiter Kontostand: </p>
                    <span id="accountBalance">{this.props.gameScore} §</span>
                </div>
            </nav>
        );
    }
}

class BadgeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    addBadge(id, position) {
        for (let item in this.props.badges) {

        }
    }

    render() {
        let renderBadges = this.props.badgeArray.map((badge, number) =>
            <Badge title={badge.title} image={badge.image} key={number}/>
        );

        return (
            <div>
                <p>Deine Badges: </p>
                <div className="row badgeRow">
                    {renderBadges}
                </div>
            </div>


        );
    }
}

class Badge extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="badgeContainer">
                <img src={this.props.image} alt={this.props.title} className="badgeImage"/>
            </div>
        );
    }
}

class Questionnaire extends React.Component {
    /*
    Properties:
        mode (String): "noFlag", "noFit", "flagFit" for different modes (randomly selected in Game).
                       - "noFlag": No flag priming
                       - "noFit": A randomly selected flag is used for priming
                       - "flagFit": The flag of the user's nationality is used for priming.
       flags (JSON):
    Methods:
        increaseScore(number): from Game
        handleAudit(isAudited, number): from Game
        handleSubmit():
        handleButtonClick():
        handleAudit():

     */
    constructor(props) {
        super(props);
        let firstFlag = this.props.flags[0];

        this.state = {
            itemblockdata: data,
            currentBlockIndex: 0,
            isInProgress: true,
            flag: JSON.stringify(firstFlag)
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleAudit = this.handleAudit.bind(this);
        this.notifyChanges = this.notifyChanges.bind(this);
        this.activateBadge = this.activateBadge.bind(this);
    }

    handleSubmit() {
    }

    handleButtonClick(number) {
        let newNumber = this.state.currentBlockIndex + 1;
        if (newNumber < this.state.itemblockdata.itemBlocks.length) {
            this.setState({currentBlockIndex: newNumber.valueOf()});
        }
        else {
            console.log("Reached end of questionnaire");
        }
        //Here we call Game's increaseScore
        if (number > 0) {
            this.props.increaseScore(number);
        }
    }

    handleAudit(isAudited, number) {
        /*
        Passes the declared number through to game
         */
        console.log("Reached Questionnaire's handleAudit with :" + isAudited.valueOf() + ", " + number);
        this.props.handleAudit(isAudited, number)
    }

    notifyChanges(id) {
        console.log("Reached notifyChanges in Q " + id);
        let mode = this.props.mode;
        if (this.props.mode === "flagFit") {
            var count = 0;
            for (let i = 0; i < this.props.flags.length; i++) {
                console.log(i);
                if (i == id) {
                    let selectedFlag = this.props.flags[i];
                    console.log(mode + " selected: " + JSON.stringify(selectedFlag));
                    this.setState({flag: JSON.stringify(selectedFlag)});
                }
            }
        }
        else if (this.props.mode === "noFit") {
            let randomFlag = this.props.flags[Math.floor(Math.random() * flags.length)];
            this.setState({flag: JSON.stringify(randomFlag)});
            console.log(mode + " selected: " + JSON.stringify(randomFlag));

        }

        else {
            console.log(mode + " no flag selected!");
        }
        this.props.notifyFlagDisplay(this.state.flag);

    }

    activateBadge(number) {
        this.props.activateBadge(number);
    }

    render() {
        let blocks = this.state.itemblockdata.itemBlocks.map((itemBlock, number) => {
                if (itemBlock.role === "audit") {
                    return <AuditBlock blockID={itemBlock.iblock}
                                       title={itemBlock.title}
                                       role={itemBlock.role}
                                       explanationText={itemBlock.explanationText}
                                       image={itemBlock.image}
                                       handleAudit={this.handleAudit}
                                       handleButtonClick={this.handleButtonClick}
                                       key={number}
                    />;
                }
                else if (itemBlock.role === "flags") {
                        if (this.props.mode === "noFlag") {
                            return <ItemBlock blockID={itemBlock.iblock}
                                              title={"Bitte weitergehen!"}
                                              role={itemBlock.role}
                                              explanationText="Dieser Abschnitt ist deaktiviert. Bitte klicke auf 'Weiter'"
                                              image="null"
                                              flagData="null"
                                              maximumValue={itemBlock.maximumValue}
                                              questions={[]}
                                              reward={itemBlock.reward}
                                              key={number}
                                              handleButtonClick={this.handleButtonClick}
                                              notifyChanges={this.notifyChanges}
                            />;
                        }
                        else {
                            let flagData = JSON.parse(this.state.flag);
                            return <ItemBlock blockID={itemBlock.iblock}
                                              title={itemBlock.title}
                                              role={itemBlock.role}
                                              flagData={flagData}
                                              explanationText={itemBlock.explanationText}
                                              image={flagData.flag}
                                              maximumValue={itemBlock.maximumValue}
                                              questions={itemBlock.questions}
                                              reward={itemBlock.reward}
                                              key={number}
                                              handleButtonClick={this.handleButtonClick}
                                              notifyChanges={this.notifyChanges}
                            />;
                        }

                }
                else if (itemBlock.role === "natPat") {
                    let flagData = JSON.parse(this.state.flag);
                    return <ItemBlock blockID={itemBlock.iblock}
                                      title={itemBlock.title}
                                      role={itemBlock.role}
                                      flagData={flagData}
                                      explanationText={itemBlock.explanationText}
                                      image="null"
                                      maximumValue={itemBlock.maximumValue}
                                      questions={itemBlock.questions}
                                      reward={itemBlock.reward}
                                      key={number}
                                      handleButtonClick={this.handleButtonClick}
                                      notifyChanges={this.notifyChanges}
                    />;
                }


                else {
                    return <ItemBlock blockID={itemBlock.iblock}
                                      title={itemBlock.title}
                                      role={itemBlock.role}
                                      flagData="null"
                                      explanationText={itemBlock.explanationText}
                                      image={itemBlock.image}
                                      maximumValue={itemBlock.maximumValue}
                                      questions={itemBlock.questions}
                                      reward={itemBlock.reward}
                                      key={number}
                                      handleButtonClick={this.handleButtonClick}
                                      notifyChanges={this.notifyChanges}
                                      activateBadge={this.activateBadge}

                    />;
                }
            }
        );

        var block = blocks[this.state.currentBlockIndex];

        let submitButton = this.state.isInProgress ? "" :
            <input type="submit" className="btn" onClick={this.handleSubmit}/>;

        return (
            <form className="itemBlockForm">
                {block}

                {submitButton}
            </form>
        );
    }
}

class ItemBlock extends React.Component {
    /*
    Properties:
        blockID (Int): Identifying number of the Item Block. Incremeting by one, starting with 101 (to avoid confusion with question IDs).
        title (String): Title of the Item Block, displayed above the image
        image (String): URL for the image to be displayed, "null" for no image.
        explanationText (String): Explanation text of the item block. Should give instructions to the user for the following items
        questions (Array(JSON)): Array of questions of the itemBlock. Includes id, name, type, content, items (dependent on question type).
        maximumPoints(Int): The maximum amount of points that can be earned in the Item Block. Depends on performance of tasks. 0 if no points can be earned in the Item Block.


    Methods:
    handleButtonClick (from Questionnaire): Activates handleButtonClick in Questionnaire.
     */
    constructor(props) {
        super(props);
        var valueMap = new Map([]);
        var array = [];
        for (let question in this.props.questions) {
            array.push(true);
        }
        this.state = {
            score: 0,
            valueMap: valueMap,
            itemValidityArray: array,
            itemsAreValid: true
        };
        this.calculatePoints = this.calculatePoints.bind(this);
        this.increaseScore = this.increaseScore.bind(this);
        this.notifyChanges = this.notifyChanges.bind(this);
        this.updateValidity = this.updateValidity.bind(this);
    }

    increaseScore(id, number) {
        let currentScore = this.state.score + number.valueOf();

        var map = this.state.valueMap;
        map.set(id, number);
        this.setState({valueMap: map})

    }


    calculatePoints() {
        let calculatedScore = 0;
        if (this.state.valueMap.size > 0) {
            this.state.valueMap.forEach((value, key) =>
                calculatedScore += value);
        }
        let reward = this.props.reward;
        if (reward.condition) {
            if (reward.type === "ecobucks") {
                calculatedScore += reward.number;
            }
            else if (reward.type === "badge") {
                console.log("here we get badge number " + reward.number);
                if (reward.condition) {
                    this.props.activateBadge(reward.number);
                }

            }
        }

        if (this.state.itemsAreValid) {
            this.props.handleButtonClick(calculatedScore);
        }
        else {
            alert("Bitte gib gültige Werte in alle Textfelder ein!");
        }

    }

    notifyChanges(id) {
        console.log("Reached notifyChanges in IB " + id);
        this.props.notifyChanges(id);
    }

    updateValidity(number, itemIsValid) {
        var array = this.state.itemValidityArray;
        array[number] = itemIsValid;
        this.setState({itemValidityArray: array});
        var bool = true;
        for (let i = 0; i < this.state.itemValidityArray.length; i++) {
            if (!this.state.itemValidityArray[i]) {
                bool = false;
            }
        }
        this.setState({itemsAreValid: bool});
    }

    render() {
        let natPatItemContents = [];
        if (this.props.flagData !== "null" && this.props.role === "natPat") {
            let flagData = this.props.flagData;
            let person = flagData.person;
            natPatItemContents = [
                "Es ist wichtig für mich, ein/e " + person + " zu sein.",
                "Ich denke, ich bin ein/e typische/r " + person +". ",
                "Der Begriff " +  person + " beschreibt mich gut.",
                "Ich glaube daran, das zu tun, was das Beste für mein Land ist.",
                "Meinem Land zu dienen bedeutet auch, etwas zu tun, was ich nicht möchte.",
                "Es ist wichtig, dem Land auszuhelfen, auch wenn es gegen meine persönlichen Wünsche geht."
            ]
        }

        let questions = this.props.questions.map((question, number) => {
                if (question.qtype === "TextItem") {
                    return <TextItem id={question.id}
                                     name={question.qname}
                                     questionContent={question.content}
                                     inputType={question.input}
                                     updateValidity={this.updateValidity}
                                     number={number}
                                     key={number}/>;
                }
                else if (question.qtype === "DropdownItem") {
                    return <DropdownItem id={question.id}
                                         name={question.qname}
                                         questionContent={question.content}
                                         items={question.items}
                                         notifyChanges={this.notifyChanges}
                                         key={number}/>;
                }
                else if (question.qtype === "SliderItem") {
                    return <SliderItem id={question.id}
                                       name={question.qname}
                                       questionContent={question.content}
                                       sliderGoal={question.sliderGoal}
                                       increaseScore={this.increaseScore}
                                       key={number}/>
                }
                else if (question.qtype === "RadioItem") {
                    let itemContent = this.props.role === "natPat" ? natPatItemContents[number] : question.content;
                    return <RadioItem id={question.id}
                                      name={question.qname}
                                      questionContent={itemContent}
                                      items={question.items}
                                      updateValidity={this.updateValidity}
                                      number={number}
                                      key={number}/>;
                }
            }
        );

        return (
            <div>
                <div className="itemBlockIntro">
                    <h1>{this.props.title}</h1>
                    {this.props.image === "null" ? "" : <img src={this.props.image}/>}
                    <p>{this.props.explanationText} </p>
                </div>

                <div>
                    {questions}
                </div>
                <button className="btn continueButton" onClick={this.calculatePoints}
                        disabled={!this.state.itemsAreValid}>Weiter
                </button>
            </div>


        );
    }

}

class AuditBlock extends React.Component {
    /*
    Explanation:
        AuditBlocks are similar to itemBlocks, but they contain logic for the "tax audit portion" of the Questionnaire.
        Unlike item blocks however, they contain a fixed set of items: One TextItem in which the user self-reports their
        earnings, and a number of AuditItems that represent the chance of getting audited.

    Properties:
        blockID (Int): Identifying number of theAuditBlock. Incremeting by one, starting with 101 (to avoid confusion with question IDs).
        title (String): Title of the AuditBlock, displayed above the image
        image (String): URL for the image to be displayed, "null" for no image.
        explanationText (String): Explanation text of the AuditBlock. Should give instructions to the user.
        probability (Double): Probability

    Methods:

     */

    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            auditIsComplete: false};

        this.handleAudit = this.handleAudit.bind(this);
        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleContinue = this.handleContinue.bind(this);

    }

    handleTextInput(event) {
        let value = event.target.value;
        this.setState({number: value.valueOf()})
    }

    handleAudit(isAudited) {
        /*
        This should fetch the number submitted and pass it upward to Questionnaire.
         */
        let number = this.state.number;
        console.log("reached AuditBlock's handleAudit with " + number);

        if (number === 0) {
            alert("Dein Kontostand kann nicht 0 sein! Hast du vergessen, einen Betrag anzugeben?")
        }
        else {
            this.props.handleAudit(isAudited, number);
            this.setState({auditIsComplete: true});
        }

    }

    handleContinue() {

        this.props.handleButtonClick();
    }

    render() {
        var auditItems = [];

        for (let i = 0; i < 10; i++) {
            let auditItem = <AuditItem probability="0.1" id={i} name={i} key={i} handleAudit={this.handleAudit}/>;
            auditItems.push(auditItem);
        }
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.image === "null" ? "" : <img src={this.props.image}/>}
                <p>{this.props.explanationText} </p>
                <div>
                    <input type="text" id="auditTextEntry" onChange={this.handleTextInput}/>
                </div>
                <div className="row auditItemContainer">
                    {auditItems}
                </div>
                <button className="btn continueButton" onClick={this.handleContinue} disabled={!this.state.auditIsComplete}>Weiter</button>
            </div>
        );
    }
}

class RadioItem extends React.Component {
    /*
   Properties:
   id (Int): Identifying number of the question
   name (String): Name property

   questionContent (String): Text of the question
   items (Array): Items for for radio items, lowest to highest.
    */
    constructor(props) {
        super(props);

        this.validateInput = this.validateInput.bind(this);
    }

    componentDidMount() {
        this.props.updateValidity(this.props.number, false);
    }

    validateInput(event) {
        if (event.target.accessKey === "correct") {
            this.props.updateValidity(this.props.number, true);
        }
        else if (event.target.accessKey === "false") {
            this.props.updateValidity(this.props.number, false);
        }
    }

    buttonStyle = {
        marginRight: 5
    };

    render() {
        let items = this.props.items.map((item, number) =>
            <div key={number} className="radioItem">
                <input type="radio" accessKey={item.value} value={number} name={this.props.name} style={this.buttonStyle} onChange={this.validateInput}/>
                <label htmlFor={number}> {item.content} </label>
            </div>
        );

        let containerHorizontal = <div id="radioItemContainer"
                                       className="verticalRadioItemContainer row"> {items} </div>;
        let containerVertical = <div id="radioItemContainer" className="horizontalRadioItemContainer"> {items} </div>

        return (
            <div className="itemContainer radio" id={this.props.id}>
                <label> {this.props.questionContent}
                    {items.length < 5 ? containerHorizontal : containerVertical}
                </label>
            </div>
        );

    }


}

class SliderItem extends React.Component {
    /*
    Properties:
        id (Int): ID number of the item
        name (String): name property

        questionContent (String) : Text of the question
        sliderGoal (Int) : Goal to which the slider is set
     */
    constructor(props) {
        super(props);
        this.state = {
            proximity: 0,
            testMode: false,
            score: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let sliderInput = event.target.value;
        let id = event.target.id;

        let accuracy = Math.abs(sliderInput - this.props.sliderGoal);
        var result = 600 - (accuracy * 60);
        if (result < 0) {
            result = 0;
        }
        this.setState({score: result.valueOf()});
        this.props.increaseScore(id, result.valueOf());
    }

    render() {
        let testFeedback = this.state.testMode ? <span>Du bekommst {this.state.score} § für diese Lösung dieser Aufgabe! </span> : "";
        return (
            <div className="itemContainer slider">
                <label>
                    {this.props.questionContent}
                </label>
                <br/>
                <input className="sliderItem" type="range" min="0" max="100" name={this.props.name} id={this.props.id}
                       onChange={this.handleChange}/>
                <br/>
                {testFeedback}
            </div>
        )
    }
}

class TextItem extends React.Component {
    /*
    Properties:
    questionContent(String): Text of the question
    id (Int): Identifying number

    name: Name of the item (needed for posting it to server).
     */
    constructor(props) {
        super(props);

        this.state = {
            feedback: "",
        };

        this.validateInput = this.validateInput.bind(this);
    }

    componentDidMount() {
        this.props.updateValidity(this.props.number, false);
    }

    validateInput(event) {
        var reg = /^\d+$/;
        let input = event.target.value;
        if (reg.test(input)) {
            console.log("Input " + input.valueOf() + " good");
            this.props.updateValidity(this.props.number, true);
        }
        else {
            console.log("Input " + input.valueOf() + " bad");
            this.setState({feedback: "Bitte nur ganze Zahlen eingeben!"})
            this.props.updateValidity(this.props.number, false);
        }
    }

    render() {
        return (
            <div className="itemContainer text" id={this.props.id} key={this.props.id}>
                <label>
                    {this.props.questionContent}
                </label>
                <br/>
                <input type="text" name={this.props.name} onBlur={this.validateInput}/>
                <span id="feedback">{this.state.feedback}</span>
            </div>
        );
    }

}

class DropdownItem extends React.Component {
    /*
    Properties:
    id (Int): Identifying number of the question
    name (String): Name property

    questionContent (String): Text of the question
    items (Array): Items for a dropdown menu, highest to lowest.
     */
    constructor(props) {
        super(props);
        this.notifyChanges = this.notifyChanges.bind(this);
    }

    notifyChanges(event) {

        let id = event.target.id;
        let value = event.target.value;
        console.log("selected: " + value);
        this.props.notifyChanges(value);
    }

    render() {
        let dropdownOptions = this.props.items.map((item, number) =>
            <option value={item.id} id={number} key={number}>{item.content}</option>
        );
        return (
            <div className="itemContainer dropdown" key={this.props.id}>
                <label htmlFor="">
                    {this.props.questionContent}
                </label>
                <br/>
                <select name={this.props.name} onChange={this.notifyChanges}>
                    {dropdownOptions}
                </select>
            </div>
        )
    }
}

class AuditItem extends React.Component {
    /*
    Explanation:
    Audit items are presented as "cards" that hold a one in x chance of getting audited
    Properties:
        probability (Double): any value between 0 and 1 that represents a chance.

     */

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {message: "msg"};
    }

    handleClick(event) {
        event.target.setAttribute("active", true);
        let random = Math.random();
        if (random <= 0.1) {
            console.log("You got audited. Random value: " + random);
            this.props.handleAudit(true);
            this.setState({message: "Audit!"})
        }
        else {
            console.log("No audit for you! Random value: " + random);
            this.props.handleAudit(false);
            this.setState({message: "No Audit!"});
        }
    }

    render() {
        return (
            <div className="flip-container">
                <div className="flipper">
                    <div className="auditItem front" onClick={this.handleClick}>
                        <p className="auditItemText">{this.props.id}</p>
                    </div>
                    <div className="auditItem back" onClick={this.handleClick}>
                        {this.state.message}
                    </div>
                </div>
            </div>

        );
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<Game data={data} flags={flags} badges={badges}/>, domContainer);