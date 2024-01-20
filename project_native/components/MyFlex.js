import React from "react";
import { StyleSheet,View,Text } from "react-native";

const MyFlex =() =>{
    return(
        <View style={styles.container}>
            <View style={styles.red}></View>
            <View style={styles.orange}></View>
            <View style={styles.green}></View>
            <View style={styles.yellow}></View>
        </View>
    );
};
/*
    Flex Direction คือคุณสมบัติที่ควบคุมทิศทางการเรียงของ item ภายใน container โดยมีค่าปกติ (default) คือ

    column(default value) มีทิศทางการเรียง item จากบนลงล่าง และถ้ามีการห่อหุ้มจะนำ item ที่เกินไปอยู่ด้านขวา
    ของ item เริ่มต้นเพื่ออยู่บนสุด
    row เรียงจากซ้ายไปขวา
    column-reverse เรียงจากล่างขึ้นบน
    row-reverse เรียงจากขวามาทางซ้าย

    Layout Direction คือคุณสมบัติการกำหนดแนวของ item และข้อความ ซึ่งมี
    LTR (default value) มีการวางแนวของ item โดยเริ่มจาก ซ้ายไปขวา
    RTL มีการวางแนวของ item โดยเริ่มจาก ขวาไปซ้าย

    Justify Content คือคุณสมบัติการจัดเรียงแนวของ item  ลูก ซึ่งสามารถวางแนวตรงกลางได้ (center) โดย
    ใช้ร่วมกับ FlexDirection ให้เรียงแนวตั้งหรือแนวนอน โดยมีค่าต่างๆ ดีงนี้
    flex-start (defalut value) โดยเรียง item ใน container ตามจุดเริ่มต้นของแกนหลัก
    flex-end เรียง item ใน container ณ ส่วนสุดท้ายของ container  ตามแนวแกนหลัก
    center เรียง item  ใน container อยู่ตรงกลางของ container ตามแกนหลัก
    space-between เรียงโดยแบ่งช่องว่างขวางแนวแกนหลัก โดยมีการกระจายพื้นที่ระหว่าง item ลูก 
    space-around มีการจัดเรียงเหมือนกับ space-between แต่จะเว้นพื้นที่ว่างรอบๆ item 
    space-evenly มีการจัดเรียงเหมือนกับ space-around แต่จะแบ่งพื้นที่ว่างให้เท่าๆกัน

    Align item เป็นการจัดเรียง items คล้ายๆกับ justifyContent แต่ align item จะจัดเรียงขวางกับแนวแกนหลัก
    ซึ่งมีคุณสมบัติ
    stretch (default value) ยืด item ภายใน container โดยคิดจากความสูงของ container ตามแนวแกนหลัก
    flex-start วางแนว item ใน container ที่จุดเริ่มขวางแนวแกนหลัก
    flex-end วางแนว item ใน container ที่จุดสิ้นสุดขวางแนวแกนหลัก
    center วางแนว item ใน container ที่จุดกึ่งกลางขวางแนวแกนหลัก

    Flex Wrap คือคุณสมบัติที่ใช้กำหนดให้ container ควบคุมการแสดงผลเมื่อเกิดเหตุการณ์ที่ item ลูก 
    overflow (เกินขอบเขตหรือขนาดที่กำหนด) ในกรณีที่ item นั้นถูกจัดให้อยู่แนวเดียว (single line) 
    (ซึ่งอาจเกินขนาดหรือขอบเขตการแสดงผล) ถ้า container มีการ wrap เกิดขึ้น item  ที่ถูก wrap 
    จะถูกจัดให้อยู่หลายแนว (multiple line) เท่าที่จำเป็น

*/ 
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
    red:{
        flex:1,
        backgroundColor:'red'
    },
    orange:{
        flex:2,
        backgroundColor:'orange'
    },
    green:{
        flex:3,
        backgroundColor:'green'
    },
    yellow:{
        flex:2,
        backgroundColor:'yellow'
    }
});
export default MyFlex;