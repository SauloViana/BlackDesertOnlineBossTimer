const arrayBossSchedule = {
  monday: {
    hours: {
      "2:00": [
        { name: "Karanda", url: "img/karanda.png" },
        { name: "Kzarka", url: "img/kzarka.png" },
      ],
      "11:00": [{ name: "Nouver", url: "img/nouver.png" }],
      "16:00": [
        { name: "Kutum", url: "img/kutum.png" },
        { name: "Kzarka", url: "img/kzarka.png" },
      ],
      "20:00": [
        { name: "Nouver", url: "img/nouver.png" },
        { name: "Kutum", url: "img/kutum.png" },
      ],
      "23:30": [{ name: "Garmoth", url: "img/garmoth.png" }],
    },
  },
  tuesday: {
    hours: {
      "2:00": [{ name: "Kutum", url: "img/kutum.png" }],
      "11:00": [{ name: "Kzarka", url: "img/kzarka.png" }],
      "16:00": [
        { name: "Nouver", url: "img/nouver.png" },
        { name: "Kutum", url: "img/kutum.png" },
      ],
      "20:00": [
        { name: "Kzarka", url: "img/kzarka.png" },
        { name: "Karanda", url: "img/karanda.png" },
      ],
      "23:30": [{ name: "Offin", url: "img/offin.png" }],
    },
  },
  wednesday: {
    hours: {
      "2:00": [{ name: "Kzarka", url: "img/kzarka.png" }],
      "11:00": [
        { name: "Kutum", url: "img/kutum.png" },
        { name: "Karanda", url: "img/karanda.png" },
      ],
      "16:00": [{ name: "Kzarka", url: "img/kzarka.png" }],
      "20:00": [
        { name: "Quint", url: "img/quint.png" },
        { name: "Muraka", url: "img/muraka.png" },
      ],
      "23:30": [{ name: "Garmoth", url: "img/garmoth.png" }],
    },
  },
  thursday: {
    hours: {
      "2:00": [
        { name: "Karanda", url: "img/karanda.png" },
        { name: "Kutum", url: "img/kutum.png" },
      ],
      "11:00": [
        { name: "Nouver", url: "img/nouver.png" },
        { name: "Karanda", url: "img/karanda.png" },
      ],
      "16:00": [
        { name: "Kutum", url: "img/kutum.png" },
        { name: "Muraka", url: "img/kzarka.png" },
      ],
      "20:00": [
        { name: "Nouver", url: "img/nouver.png" },
        { name: "Kutum", url: "img/kutum.png" },
      ],
    },
  },
  friday: {
    hours: {
      "0:15": [{ name: "Vell", url: "img/vell.png" }],
      "2:00": [
        { name: "Karanda", url: "img/karanda.png" },
        { name: "Offin", url: "img/offin.png" },
      ],
      "11:00": [{ name: "Nouver", url: "img/nouver.png" }],
      "16:00": [
        { name: "Kutum", url: "img/kutum.png" },
        { name: "Kzarka", url: "img/kzarka.png" },
      ],
      "20:00": [
        { name: "Nouver", url: "img/nouver.png" },
        { name: "Kzarka", url: "img/kzarka.png" },
      ],
      "23:30": [{ name: "Garmoth", url: "img/garmoth.png" }],
    },
  },
  saturday: {
    hours: {
      "2:00": [{ name: "Kzarka", url: "img/kzarka.png" }],
      "11:00": [
        { name: "Kzarka", url: "img/kzarka.png" },
        { name: "Karanda", url: "img/karanda.png" },
      ],
      "16:00": [
        { name: "Nouver", url: "img/nouver.png" },
        { name: "Kutum", url: "img/kutum.png" },
      ],
      "20:00": [
        { name: "Quint", url: "img/quint.png" },
        { name: "Muraka", url: "img/muraka.png" },
      ],
    },
  },
  sunday: {
    hours: {
      "2:00": [{ name: "Nouver", url: "img/nouver.png" }],
      "11:00": [
        { name: "Kutum", url: "img/kutum.png" },
        { name: "Nouver", url: "img/nouver.png" },
      ],
      "16:00": [
        { name: "Kzarka", url: "img/kzarka.png" },
        { name: "Karanda", url: "img/karanda.png" },
      ],
      "18:00": [{ name: "Vell", url: "img/Vell.png" }],
      "20:00": [
        { name: "Nouver", url: "img/Nouver.png" },
        { name: "Karanda", url: "img/Karanda.png" },
      ],
      "23:30": [{ name: "Offin", url: "img/offin.png" }],
    },
  },
};

const weeks = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

let arrayBossNames = new Array();

function getTimeDiff(currentDate, nextBossHour, nextBossMinute) {
  var current = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    currentDate.getHours(),
    currentDate.getMinutes(),
    currentDate.getSeconds()
  );
  var boss = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    nextBossHour,
    nextBossMinute
  );

  if (boss < current) {
    boss.setDate(boss.getDate() + 1);
  }

  const diff = boss - current;

  let msec = diff;
  const hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  const mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  const ss = Math.floor(msec / 1000);
  msec -= ss * 1000;

  return (
    hh +
    ":" +
    mm.toString().padStart(2, "0") +
    ":" +
    ss.toString().padStart(2, "0")
  );
}

function constructBossContents(arrayBossNames) {
  document.getElementById("boss-container").innerHTML = "";

  for (let i in arrayBossNames) {
    const divContent = document.createElement("div");
    const img = document.createElement("img");
    const divName = document.createElement("div");
    const bossName = arrayBossNames[i].name;
    const bossUrl = arrayBossNames[i].url;

    divContent.setAttribute("class", "boss-content");
    img.setAttribute("src", bossUrl);
    divName.setAttribute("class", "boss-name");
    divName.innerHTML = bossName;
    divContent.appendChild(img);
    divContent.appendChild(divName);
    document.getElementById("boss-container").appendChild(divContent);
  }
}

function getBossCountdown() {
  const currentDate = new Date();
  const weekDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  let nextBossTextTime = null;
  let nextBossHour = null;
  let nextBossMinute = null;

  const bossHours = arrayBossSchedule[weeks[weekDay]].hours;

  for (let time in bossHours) {
    const arrayTime = time.split(":");
    const bossHour = arrayTime[0];
    const bossMinute = arrayTime[1];

    if (
      bossHour >= currentHour &&
      (bossHour > currentHour || bossMinute > currentMinute)
    ) {
      nextBossTextTime = time;
      nextBossHour = bossHour;
      nextBossMinute = bossMinute;
      arrayBossNames = bossHours[time];
      break;
    }
  }

  const timeDiff = getTimeDiff(currentDate, nextBossHour, nextBossMinute);

  document.getElementById("boss-countdown").innerHTML = timeDiff;

  constructBossContents(arrayBossNames);
}

setInterval(getBossCountdown, 1000);
