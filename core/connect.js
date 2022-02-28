const passport=require('passport')
const LS=require('passport-local').Strategy
const mysql=require('mysql')
let db=require('./db')
const express = require('express');
const fs = require('fs');
const router = express.Router();
const settings=require('../settings')

// console.log(db)
/*
let params=settings.dbConfig_plesk
let connection=mysql.createConnection({host:"localhost",pwd:"Fd3^1b8o",database:"jesuschrist",user:"jctv"})
*/
let params=settings.dbConfig
let connection=mysql.createConnection(params)
//console.log(connection);
connection.connect((error)=>{if(error)console.log( error); else console.log('mysql connected')})
//console.log('yooooooooooooooooooooooooooooooooooo');
passport.serializeUser((user,done)=>{
	//durant la stratégie(login et signin)
	console.log('jesuispassee parla')
	done(null,user.id)
})
passport.deserializeUser((id,done)=>{
	//après la redirection
	connection.query("select * from user natural join users where id= ? ",[id],(error,rows)=>{
		console.log('etmoi, jesuispassee parla aussi')
		done(error,rows[0])
	})
})
passport.use('login',new LS({usernameField:'email',passwordField:"pwd",passReqToCallback:true},(req,user,pwd,done)=>{
	console.log('okkkkkkkkkkkkkkkkkkkkkkkkk');
	connection.query("select * from users natural join user where email = ? and pwd = ?",[user,pwd],(error,rows)=>{
		console.log("error :")
		console.log(error)
		console.log(rows)
		if(error||rows.length==0){
			return done(error,false)
		}
		else return done(error,rows[0])
	})
}))
/*
passport.use('login',new LS({usernameField:'email',passwordField:"pwd",passReqToCallback:true},(req,user,pwd,done)=>{
return done(null,false)
}))
*/
passport.use('signin',new LS({usernameField:'email',passwordField:"pwd",passReqToCallback:true},(req,user,pwd,done)=>{
	let rows,rows_,rows__,rows___
	let reqbody=req.body
	let info=JSON.stringify({birth:reqbody.birth,addr:reqbody.addr,etc:reqbody.etc})
	console.log(user)
	console.log(reqbody) 
	console.log("JE N'AI PAS REUSSI A INSERER UNE VALEUR PAR DEFAUT POUR expired_token.......") 
	connection.query("insert users(clerger,_href,nom,prenom,pseudo,email,pwd,expired_token,informations) values( ? , ? , ? , ? , ? , ? , ? , ? , ? )",[reqbody.clerger,reqbody.nom+"."+reqbody.prenom+"."+reqbody.pseudo,reqbody.nom,reqbody.prenom,reqbody.pseudo,user,pwd,"NOW() + INTERVAL 31 DAY",info],(error,rows)=>{
	// connection.query("insert users(clerger,_href,nom,prenom,pseudo,email,pwd,informations) values( ? , ? , ? , ? , ? , ? , ? , ? )",[reqbody.clerger,reqbody.nom+"."+reqbody.prenom+"."+reqbody.pseudo,reqbody.nom,reqbody.prenom,reqbody.pseudo,user,pwd,info],(error,rows)=>{
		console.log("___________")
		console.log(error)
		console.log("___________")
		console.log(rows)
		console.log(typeof rows.insertId)
		console.log("___________")
		// if(typeof rows.insertId=='undefined')return done(error,false)
		if(error)return done(error,false)
		else
			connection.query("insert user(id,_type_,letype,msgs,groups,participed,created,shared,liked,published,guerir,likes,following,followed,livredor) values( ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? )",[rows.insertId,reqbody.type,reqbody.type_value,"[]","{\"mes_groupes\":[]}","{}","{}","{}","{}","{}","[]","{\"amen\":\"\",\"hosanna\":\"\",\"alleluia\":\"\"}","[]",0,"[]"],(error,rows_)=>{
				// if(typeof rows.insertId=='undefined')return done(error,false)
				if(error)return done(error,false)
				else
					connection.query("insert user_archive(id,msgs,participed,created,shared,liked,published,livredor) values( ? , ? , ? , ? , ? , ? , ? , ? )",[rows.insertId,"[]","{}","{}","{}","{}","{}","[]"],(error,rows__)=>{
						if(error)return done(error,false)
						else
							connection.query("select * from users natural join user where id= ? ",[rows.insertId],(error,rows___)=>{
								// if(typeof rows.insertId=='undefined')return done(error,false)
								if(error)return done(error,false)
								else{
									let dir=__dirname+"/users/"+rows___[0].id+"_"+rows[0]._href
									console.log(dir)
									fs.mkdirSync(dir,0744)
									let file=fs.openSync(dir+"/notifs.js","a")
									file="var notifs={}"
									fs.writeFileSync(dir+"/notifs.js",file)
									file=fs.openSync(dir+"/msgs.js","a")
									file="var msgs=[]"
									fs.writeFileSync(dir+"/msgs.js",file)
									file=fs.openSync(dir+"/murs.js","a")
									file=fs.openSync(dir+"/_murs.js","a")
									return done(error,rows___[0])	
								}
							})
					})
			})
	})
}))
