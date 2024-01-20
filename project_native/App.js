import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,  Button, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import MyCore from './components/MyCore';
import MyFlatList from './components/MyFlatList';
import MyStyle from './components/myStyle';
import MyFlex from './components/MyFlex';
import MyFlexProp from './components/MyFlexProp';
export default function App() {
  const [pokemon,setPokemon] = useState([
    {pokemonName:"แมว", pokamonPic :'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'},
    {pokemonName:"แมวเป้า", pokamonPic :'https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg'},
    {pokemonName:"แมวโพง", pokamonPic :'https://cdn.thinglink.me/api/image/655498865562091522/1024/10/scaletowidth/0/0/1/1/false/true?wait=true'},
    {pokemonName:"แมวน้ำ", pokamonPic :'https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180'},
    {pokemonName:"แมวกุ๊กๆ", pokamonPic :'https://tse1.mm.bing.net/th?id=OIP.hF8_3tDhRrZvxm-j1kZwgwHaE9&pid=Api&P=0&h=180'},
    {pokemonName:"แมวกัน", pokamonPic :'https://pixy.org/src2/578/5782085.jpg'},
  ]);
  return (
    
     

<View style={styles.container}>
  {/* <StatusBar style='auto'/>

    <Text>My Name is jakkarin</Text> */}
    
  {/* <MyCore pokemonName="นก" pokamonPic ='https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg' />
  <MyCore pokemonName="ไก่มัง" pokamonPic ='https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180' />
  <MyCore pokemonName="ไข่" pokamonPic ='https://pixy.org/src2/578/5782085.jpg' />  */}
  {/* <FlatList
  style={{marginTop:20}}
  data={pokemon}
  renderItem={({item}) => <MyCore pokemonName={item.pokemonName} pokamonPic={item.pokamonPic}/>}/>
  <MyFlatList/>
  <MyStyle/> */}
  {/* <MyFlex/> */}
  <MyFlexProp/>
</View>

    

  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    //backgroundColor: 'linear-gradient(90deg, rgba(250,203,178,1) 11%, rgba(249,208,187,1) 34%, rgba(255,182,144,1) 75%, rgba(251,161,114,1) 100%)',
    // alignItems: 'center',
    // justifyContent: 'center',
    // gap:10
    backgroundColor:'#fff',
  },
 
  


});

/*
React native เป็น opensource framework สำหรับการสร้าง android และ ios แอพพลิเคชั่น โดยมี
การใช้ react และ สร้างของโครงสร้างพื้นฐานของตัว โมบาย  ทำให้สามารถรองรับการพัฒนาได้
โดย React native จะใช้ JavaScript ในการเข้าถึง platform's API ในการสร้าง UI (user interface)
มีการใช้งาน Component ของ react เพื่อให้สามารถ reusetable , nestable code  
view and mobile development
ทั้งในการพัฒนาฝั่ง android และ ios จะมีสิ่งที่เรียกว่า view ซึ่งเป็นพื้นฐานในการแสดงผล UI ซึ่งสามาถใช้
ในการแสดงผล text,images หรือ การโต้ตอบการป้อนข้อมูลของผู้ใช้งาน  หรือพวก element ต่างๆ เช่น
เส้น ปุ่ม หรือส่วนอื่นๆ  ทั้งหมดเป็นส่วนหนึ่งของ views tais 


React Fundamen
react native จะทำงานแบบ react ซึ่งเป็น open source library ที่ได้รับความนิยมในการสร้าง UI โดยใช้ภาษา
js และเพื่อที่จะเริ่มต้นการใช้งาน react native ใครต้องมีพื้นฐานแนวคิดของ react ดังนี้ 
- component
เป็นเหมือนฟังก์ชันที่จะ return เนื้อหาต่างๆที่สร้างผ่าน component ซึ่งเป็นอิสระต่อกันและสามารถนำกลับมาใช้ใหม่
(reusable)
- JSX
สามารถเขียน element แทรกในภาษา JS ได้ สามารถใส่ตัวแปร แทรกไปพร้อมกับตัวอักษร (Text)
ได้ 
- props
คือการกำหนดคุณสมบัติ "properties" เพื่อตกแต่งหรือระบุค่าเจาะจงให้กับ components 
- state  ตัวเก็บข้อมูลของ Component ซึ่งถูกใช้ในการจัดการข้อมูล และตรวจสอบข้อมูลเมื่อมีการเปลี่ยนแปลง เพื่อที่แสดงผล
      โต้ตอบผู้ใช้งาน

List Views
  React Native มี Component ที่ใช้ในการนำเสนอข้อมูลในรูปแบบ List of Data โดยใช้ผ่าน FlatList หรือ SectionList
  FlatList Component จะสามารถช่วยแสดงผลรายการของข้อมูลบางโครงสร้างข้อมูลที่ต้องการแสดงผล ซึ่งจะแสดงข้อมูลตามจำนวน item 
  และสามารถ update ให้ตลอดเวลา
  FlatList Component ต้องการ props 2 ตัว คือ Data และ renderItem
  data คือ แหล่งข้อมูลต้นทางของรายการที่จะแสดงผล 
  renderItem คือตัวที่นำเอา 1 รายการจาก list ของแหล่งข้อมูลนำมาแสดงผล

//รอคอมเม้นจากเค
//คอมเม้นวันที่ 18/12/66
Style 
  ใน react native เราจะตกแต่งรูปแบบให้กับ application โดยใช้ JavaScript
  โดยมี core components ที่ชื่อว่า style ซึ่งประกอบด้วย names(ชื่อ) และ values(คำข้อมูล)
  ที่ลักษณะเหมือนการทำงานใน CSS บนเว็บ โดยแตกต่างกันตรงที่การใช้ชื่อจะอยู่ในรูปแบบ camel casing
  เช่น ใน CSS ใช้ Background-color ขณะที่ react native ใช้ backgroundColor
  
  การกำหนดคุณสมบัติของ Style สามารถกำหนดให้อยู่ในรูปแบบของ javascript object ซึ่งเป็นรูปแบบปกติ
  ที่ใช้กันใน code อยู่แล้ว นอกจากนั้นยังสามารถส่งผ่าน Style ในรูปแบบของ array โดยใช้รูปแบบของ
  การสืบทอด (inherit) 

Height and Width 
 การกำหนความสูงและความกว้างของ components บนหน้าจอ มี 3 รูปแบบคือ


 Fixed Dimension (ตายตัว) เราสามารถกำหนดความกว้างความสูง (width และ height)
 ให้กับ component ใดๆโดยกำหนดเป็นตัวเลข และมีหน่วยเป็น pixels เช่น
 style = {{
    width:50,
    height:50,
    backgroundColor:'blue',
  }} 

  ****การกำหนดขนาดแบบนี้ตะไม่ขึ้นกับขนาดของหน้าจอแสดงผล

  Flex Dimension

  Percentage Dimensions
   ถ้าต้องการกำหนดการแสดงผลให้มีขนาดตาม screen โดยไม่ใช้ flex layout เราสามารถใช้
   percentage values ในการกำหนดให้กับ style ของ component ได้

   style={{
    height:'15%',
    width:'66% ',
    backgroundColor:'blue',

   }}

   Layout width Flexbox
    Flexbox คือการจัดรูปแบบ Layout ของ component ถูกใช้โดย Flexbox algorithm โดย Flexbox 
    ถูกออกแบบให้มีความยืดหยุ่นกับการวาง layout ที่มีความแตกต่างของขนาดหน้าจอที่หลากหลาย 

    Flex จะหมายถึงการ จัดเรียง item  ในพื้นที่มีอยู่ตามแกนหลัก (main axis) โดยจะมีการแบ่งพื้นที่ตามสัดส่วนของแต่ละ element
    ที่เรากำหนด

*/ 
