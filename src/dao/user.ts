import connection from '../database/db';
import type { RowDataPacket, ResultSetHeader } from 'mysql2';


export async function getUserList(){
    let [result] = await (await connection).query<RowDataPacket[]>(`SELECT * FROM user`)
    return result;
}


export async function insertUser(sid:string, username:string, password:string){
    let [result] = await (await connection).query<ResultSetHeader>(`INSERT INTO user (sid, username, password) VALUES ('${sid}', '${username}', '${password}')`);
    return result.affectedRows;
}

export async function updateUser(sid:string,username:string,password:string, userId:string){
    let [result] = await (await connection).query<ResultSetHeader>(`UPDATE USER SET sid = '${sid}', username='${username}', password='${password}' WHERE user_id = '${userId}'`);
    return result.affectedRows
}

export async function getUserById(id:string){
    let [result] = await (await connection).query<RowDataPacket[]>(`SELECT * FROM user WHERE user_id = '${id}'`);
    return result;
}

export async function deleteUser(id:string){
    let [result] =  await (await connection).query<ResultSetHeader>(`DELETE FROM user WHERE user_id = '${id}'`);

    return result.affectedRows
}