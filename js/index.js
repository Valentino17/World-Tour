
function initMap() {
    
    const lviv = {lat: 49.800, lng: 24.012};
    
    const map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14, center: uluru,});
   
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
  <script language="javascript'>
<!--
olddates = 'January 01, 2000' // прошедшая дата на английском
d0 = new Date(olddates);
d1 = new Date();
dt = (d1.getTime() - d0.getTime()) / (1000*60*60*24);
document.write('Стартовая дата - <B>' + olddates + '</B> <br />От начала стартовой даты уже наступил <B>' + Math.round(dt) + '</B> день');
-->
</script>


<script language="javascript'>
<!--
newdates = 'September 18, 2020' // будущая дата на английском
d0 = new Date(newdates);
d1 = new Date();
dt = (d0.getTime() - d1.getTime()) / (1000*60*60*24*365);
document.write('Финишная дата - <B>' + newdates + '</B> <br />До указанного времени еще осталось <B>' + Math.round(dt) + '</B> лет');
-->
</script>


<script language="javascript'>
<!--
newdates = 'September 18, 2020' // будущая дата на английском
d0 = new Date(newdates);
d1 = new Date();
dt = (d0.getTime() - d1.getTime()) / (1000*60*60*24*30);
document.write('Финишная дата - <B>' + newdates + '</B> <br />До указанного времени еще осталось <B>' + Math.round(dt) + '</B> месяцев');
-->
</script>


<script language="javascript'>
<!--
newdates = 'September 18, 2020' // будущая дата на английском
d0 = new Date(newdates);
d1 = new Date();
dt = (d0.getTime() - d1.getTime()) / (1000*60*60*24*7);
document.write('Финишная дата - <B>' + newdates + '</B> <br />До указанного времени еще осталось <B>' + Math.round(dt) + '</B> недель');
-->
</script>


<script language="javascript'>
<!--
newdates = 'September 18, 2020' // будущая дата на английском
d0 = new Date(newdates);
d1 = new Date();
dt = (d0.getTime() - d1.getTime()) / (1000*60*60*24);
document.write('Финишная дата - <B>' + newdates + '</B> <br />До указанного времени еще осталось <B>' + Math.round(dt) + '</B> дней');
-->
</script>


<script language="javascript'>
<!--
newdates = 'September 18, 2020' // будущая дата на английском
Hourdates = '12' // часы
d0 = new Date(newdates);
d1 = new Date();
dt = (d0.getTime() - d1.getTime()) / (1000*60*60) + Hourdates;
document.write('Финишная дата и время - ' + Hourdates + '.00 часов <B>' + newdates + '</B> <br />До указанного времени еще осталось <B>' + Math.round(dt) + '</B> часов');
-->
</script>


<script language="javascript'>
<!--
newdates = 'September 18, 2020' // будущая дата на английском
Hourdates = '12' // часы
Minutedates = '30' // минуты
d0 = new Date(newdates);
d1 = new Date();
dt = (d0.getTime() - d1.getTime()) / (1000*60) + Minutedates + Hourdates*24;
document.write('Финишная дата и время - ' + Hourdates + '.' + Minutedates + ' часов <B>' + newdates + '</B> <br />До указанного времени еще осталось <B>' + Math.round(dt) + '</B> минут');
-->
</script>


<script language="javascript'>
<!--
newdates = 'September 18, 2020' // будущая дата на английском
Hourdates = '12' // часы
Minutedates = '30' // минуты
Seconddates = '25' // секунды
d0 = new Date(newdates);
d1 = new Date();
dt = (d0.getTime() - d1.getTime()) / (1000) + Seconddates + Minutedates*60 + Hourdates*60*60;
document.write('Финишная дата и время - ' + Hourdates + '.' + Minutedates + ':' + Seconddates +' <B>' + newdates + '</B> <br />До указанного времени еще осталось <B>' + Math.round(dt) + '</B> секунд');
-->
</script>