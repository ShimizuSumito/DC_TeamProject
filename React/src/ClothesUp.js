import React, { useState, useEffect } from 'react';

function ClothsUp()
{
    const userAdd = (event)=>
    {
        event.preventDefault();
        const formData = new FormData(event.target);
        const jsonData = {
            name:formData.get("name"),
            mailaddress:formData.get("mailaddress"),
            gender:formData.get("gender"),
            generation:formData.get("generation"),
            password:formData.get("password"),
            nickname:formData.get("nickname"),
            region:formData.get("region")
        }

        console.log(JSON.stringify(jsonData));

        fetch('http://localhost:8080/User/Add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(jsonData)
        })
        .then(response => {
            if (response.ok) {
        } else {
            // エラーメッセージを表示するなどの処理を行う
            console.error('Failed to add stock');
            }
        })
        .catch(error => {
            console.error('Error adding stock:', error);
            });
    }

    const userDelete = (event)=>
    {
        event.preventDefault();
        const formData = new FormData(event.target);
        let mail = formData.get("mailaddress");
        console.log(mail);
        fetch('http://localhost:8080/User/Delete/' + mail, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        })
    }

    const userUpdate = (event)=>
    {

    }

    const userLogin = (event) =>
    {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch('http://localhost:8080/User/Login/' + formData.get("mailaddress") + "/" + formData.get("password"), {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        })
    }

    return(
        <div>
            <form onSubmit={userAdd}>
                <label>名前</label>
                <input type="text" name="name"></input>
                <label>メールアドレス</label>
                <input type="email" name="mailaddress"></input>
                <label>性別</label>
                <input type="text" name="gender"></input>
                <label>年代</label>
                <input type="text" name="generation"></input>
                <label>パスワード</label>
                <input type="password" name="password"></input>
                <label>アカウント名</label>
                <input type="text" name="nickname"></input>
                <label>地域</label>
                <input type="text" name="region"></input>
                <button type='submit'>Add</button>
            </form>
            <form onSubmit={userDelete}>
                <label>メールアドレス</label>
                <input type="email" name="mailaddress"></input>
                <button type='submit'>Delete</button>
            </form>
            <form onSubmit={userUpdate}>
                <button type="submit">Update</button>
            </form>
            <form onSubmit={userLogin}>
                <label>メールアドレス</label>
                <input type="email" name="mailaddress"></input>
                <label>パスワード</label>
                <input type="password" name="password"></input>
                <button type="submit">ログイン</button>
            </form>
        </div>
    )
}

export default ClothsUp