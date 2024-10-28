const data = [
  {
    teacherName: ["鞠鑫涛"],
    schedule: [
      {
        // 教室
        room: "网球场1",
        // 节次
        lesionStart: "5",
        lesionEnd: "6",
        // 开始周
        startWeek: "2",
        // 结束周
        endWeek: "17",
        // 周几
        weekDay: "4",
      },
    ],
    classId: "211700012",
    className: "体育4",
  },
  {
    teacherName: ["侯峻", "柯云燕"],
    schedule: [
      {
        room: "A-119",
        lesionStart: "9",
        lesionEnd: "10",
        startWeek: "1",
        endWeek: "13",
        weekDay: "3",
      },
    ],
    classId: "210000004",
    className: "影视鉴赏",
  },
  {
    teacherName: ["田辉"],
    schedule: [
      {
        room: "物理实验2",
        lesionStart: "1",
        lesionEnd: "2",
        startWeek: "1",
        endWeek: "18",
        weekDay: "2",
      },
    ],
    classId: "210900031",
    className: "物理实验A",
  },
  {
    teacherName: ["臧晶"],
    schedule: [
      {
        room: "XX-428",
        lesionStart: "7",
        lesionEnd: "8",
        startWeek: "7",
        endWeek: "16",
        weekDay: "2",
      },
      {
        room: "XX-428",
        lesionStart: "7",
        lesionEnd: "8",
        startWeek: "7",
        endWeek: "17",
        weekDay: "5",
      },
    ],
    classId: "210313012",
    className: "计算机信息安全",
  },
  {
    teacherName: ["周越"],
    schedule: [
      {
        room: "XX-226",
        lesionStart: "1",
        lesionEnd: "2",
        startWeek: "1",
        endWeek: "8",
        weekDay: "1",
      },
    ],
    classId: "210300403",
    className: "网络攻防案例分析",
  },
  {
    teacherName: ["闫卫华"],
    schedule: [
      {
        room: "A-420",
        lesionStart: "3",
        lesionEnd: "4",
        startWeek: "3",
        endWeek: "15",
        weekDay: "2",
      },
      {
        room: "A-419",
        lesionStart: "7",
        lesionEnd: "8",
        startWeek: "3",
        endWeek: "15",
        weekDay: "4",
      },
    ],
    classId: "219800010",
    className: "毛泽东思想和中国特色社会主义理论体系概论",
  },
  {
    teacherName: ["徐志勇"],
    schedule: [
      {
        room: "XX-427",
        lesionStart: "5",
        lesionEnd: "6",
        startWeek: "1",
        endWeek: "10",
        weekDay: "2",
      },
      {
        room: "XX-228",
        lesionStart: "3",
        lesionEnd: "4",
        startWeek: "1",
        endWeek: "12",
        weekDay: "5",
      },
    ],
    classId: "210313011",
    className: "路由与交换技术",
  },
  {
    teacherName: ["王珺琳"],
    schedule: [
      {
        room: "XX-429",
        lesionStart: "3",
        lesionEnd: "4",
        startWeek: "1",
        endWeek: "12",
        weekDay: "1",
      },
      {
        room: "XX-427",
        lesionStart: "3",
        lesionEnd: "4",
        startWeek: "1",
        endWeek: "14",
        weekDay: "4",
      },
    ],
    classId: "210300012",
    className: "计算机组成原理",
  },
  {
    teacherName: ["关世杰", "杨大为"],
    schedule: [
      {
        room: "XX-428",
        lesionStart: "7",
        lesionEnd: "8",
        startWeek: "1",
        endWeek: "10",
        weekDay: "1",
      },
      {
        room: "XX-430",
        lesionStart: "5",
        lesionEnd: "6",
        startWeek: "1",
        endWeek: "11",
        weekDay: "3",
      },
    ],
    classId: "210300015",
    className: "数据库原理",
  },
  {
    teacherName: ["丁儒俐"],
    schedule: [
      {
        room: "A-302",
        lesionStart: "7",
        lesionEnd: "8",
        startWeek: "13",
        endWeek: "15",
        weekDay: "1",
      },
      {
        room: "A-226",
        lesionStart: "1",
        lesionEnd: "2",
        startWeek: "1",
        endWeek: "15",
        weekDay: "4",
      },
    ],
    classId: "210700022",
    className: "大学外语提高",
  },
  {
    teacherName: ["臧晶", "梁文"],
    schedule: [
      {
        room: "XX-229",
        lesionStart: "1",
        lesionEnd: "2",
        startWeek: "1",
        endWeek: "11",
        weekDay: "3",
      },
      {
        room: "XX-428",
        lesionStart: "5",
        lesionEnd: "6",
        startWeek: "1",
        endWeek: "12",
        weekDay: "5",
      },
    ],
    classId: "210300018",
    className: "操作系统",
  },
  {
    teacherName: ["孙丽艳"],
    schedule: [
      {
        room: "A-420",
        lesionStart: "3",
        lesionEnd: "4",
        startWeek: "1",
        endWeek: "2",
        weekDay: "2",
      },
      {
        room: "A-419",
        lesionStart: "7",
        lesionEnd: "8",
        startWeek: "1",
        endWeek: "2",
        weekDay: "4",
      },
    ],
    classId: "219800008",
    className: "形势与政策4",
  },
];

const zaoba_row = document.querySelector("#zaoba");
const zaoba_item = document.querySelectorAll("#zaoba td");
const zaoshi_item = document.querySelectorAll("#zaoshi td");
const xiayi_item = document.querySelectorAll("#xiayi td");
const xiaer_item = document.querySelectorAll("#xiaer td");
const xiasan_item = document.querySelectorAll("#xiasan td");
const xiasi_item = document.querySelectorAll("#xiasi td");

const time = {
  1: zaoba_row,
  3: zaoshi_item,
  5: xiayi_item,
  6: xiaer_item,
};

for (const lesson of data) {
  // schedule为该门课的上课信息
  const schedule = lesson.schedule;
  // class_time为该门课的上课时间信息
  for (const class_time of schedule) {
    const start = class_time.lesionStart;
    const weekDay = class_time.weekDay;
    console.log(start);
    if (start === "1") {
      zaoba_item[weekDay].textContent = lesson.className + "&"+ lesson.teacherName;
    } else if (start === "3") {
      zaoshi_item[weekDay].textContent = lesson.className + "&"+ lesson.teacherName;
    } else if (start === "5") {
      xiayi_item[weekDay].textContent = lesson.className + "&"+ lesson.teacherName;
    } else if (start === "7") {
      xiaer_item[weekDay].textContent = lesson.className + "&"+ lesson.teacherName;
    } else if (start == "9") {
      xiasan_item[weekDay].textContent = lesson.className + "&"+ lesson.teacherName;
    } else if (start == "11") {
      xiasi_item[weekDay].textContent = lesson.className + "&"+ lesson.teacherName;
    }
  }
}
