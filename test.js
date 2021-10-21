

var date = new Date();         // 現在日時を生成
var yyyy = date.getFullYear(); // 西暦を取得
var mm = date.getMonth() + 1;  // 月を取得（返り値は実際の月-1なので、+1する）
var dd = date.getDate(); // 日を取得
var w = date.getDay();   // 曜日を取得（数値）
 
// // 月と日が一桁の場合は先頭に0をつける
// // if (mm < 10) {
// //     mm = "0" + mm;
// // }
// // if (dd < 10) {
// //     dd = "0" + dd;
// // }
 
// 曜日を数値から文字列に変換するための配列
week = ["日", "月", "火", "水", "木", "金", "土"];  
 
var result = yyyy + "年" + mm + "月" + dd + "日" + "(" + week[w] + ")"; // フォーマットを整えて表示

function todaysDate(){
document.getElementById("dateshow").innerHTML = "<p>今日の日付："+result+"</p>"
 if(week[w] === "月" || "木"){
  document.getElementById("trush").innerHTML = "<p>今日のゴミ：燃えるゴミ</p>";

  // 土曜日の燃えないゴミ
} else if(week[w] === "土"){
  document.getElementById("trush").innerHTML = "<p>今日のゴミ：燃えないゴミ等</p>";

  // 第1・第3水曜日のゴミ
 }else if(week[w] === ""){
  document.getElementById("trush").innerHTML = "<p>今日のゴミ：燃えないゴミ等</p>";

  // 第2・第4水曜日のゴミ
 }else if(week[w] === ""){
  document.getElementById("trush").innerHTML = "<p>今日のゴミ：燃えないゴミ等</p>";

  // ゴミ回収がない場合
 }else{
  document.getElementById("trush").innerHTML = "<p>今日のゴミ：今日は収集日ではありません</p>";
 }
}

