let fn=require('../fn')
let fs=require('fs')
let db=require('../core/db')
let httpMsgs=require('./../core/httpMsgs')
let f = require('formidable')   
let m = require('multiparty')   

let util=require('util')
let session = require('express-session')




let add_all_page="",obj={}

// exports.a=()=>{return 0}
function a_(){var c="trgbv";return c}
exports.teste=(req,res)=>{
	// let sql="select name,code2 from country;"
	// db.executeSql(sql,(data,err)=>{
		// if(err)
		// console.log(err)
		// else res.end(JSON.stringify(data))
	// },"world")

	// let dir=__dirname+"/../users/2_achi.cyrille.administrateur/notifs.js"
	// console.log(dir)
	// let ok=fs.openSync(dir,"a")
	// ok="var notifs={}"
	// fs.writeFileSync(dir,ok)
	// dir=__dirname+"/../users/2_achi.cyrille.administrateur/msgs.js"
	// console.log(dir)
	// ok=fs.openSync(dir,"a")
	// ok="var msgs={}"
	// fs.writeFileSync(dir,ok)
	// res.end('done')
	
	// sql=["select * from user","select * from users","select * from cp"]
	// db.executeTransaction(sql,(data,err)=>{
		// if(err)throw err
		// else res.end(JSON.stringify(data))
	// })
	/*
	sql=["update animal set sexe='M' where id=1","update animal set nom='Rocky' where id=1","insert espece(nom_courant,nom_latin,description,prix) values('blablablz','blabla','encore du blablatage',1000)","update animal set sexe='M' where id=2"]
	db.transaction(sql,(data,err)=>{
		if(!err)res.end(JSON.stringify(data))
	},"elevage",["un","deux","trois","quatre"])
	*/
	db.executeSql('show tables',(data,err)=>res.end(JSON.stringify(data)+" ok"))
}
exports.request=(req,res,sql)=>{
	let err,data
	
	console.log("_________________");
	return new Promise(
		function(resolve,reject){
			db.executeSql(sql,(data,err)=>{
				// console.log(data[0])
				
				if(err)reject(err)
				else resolve(data[0])
			})
		}
	)
}
function bool_compiled_file(req,obj){
	let cpt=""
	if(!req.session.bool_compiled_file){
		["msgs","notifs"].forEach(function(i){
			let tmp=fs.readFileSync(__dirname+"/../users/"+obj.username_.id+"_"+obj.username_._href+"/"+i+".js","utf8")
			cpt+=tmp+"\n"
		})
//CETTE INSTRUCTION NE SE COMBINE PAS BIEN AVEC NODEMON PUISQU'IL IMPLIQUE UNE SAUVEGARDE DE FICHIER
//A DECOMMENTER SUR DEMANDE LORSQUE NODEMON EST LANCE
		// fs.writeFileSync(__dirname+"/../users/connected/"+(obj.username_.id*req.session.user_rand)+"_"+obj.username_._href+".js",cpt)
		// console.log("j'ai sauvergardé le fichier personnalisé")
	}
//SI LE FICHIER DOIT ETRE RECOMPILE PRCK UNE NEW NOTIF OU UN NEW MSG OU UN NEW OTRCHOZ
//ALORS LORS DE L'ACTION QUI AJOUTE LE NEW, IL FAUT MODIFIER req.session.bool_compiled_file A =false
	req.session.bool_compiled_file=true
}
function parse_table_pages(sqlResponseArrayResponse,obj,res,filename){
	let a,_0=_1=_2="",h="",b="",u="",er="",sql="",sql_="",obj_={},data,data_,data__,data___
			console.log(res+"_a__"+sqlResponseArrayResponse.length)
	
	try{
		for(var i=0;i<sqlResponseArrayResponse.length;i++){
			// console.log(i+"___")
			u=sqlResponseArrayResponse[i].username
			h=sqlResponseArrayResponse[i].head_object_string
			b=sqlResponseArrayResponse[i].body_object_string
			er+=sqlResponseArrayResponse[i].username+","
			head=JSON.parse(h)
			body=JSON.parse(b)
			for(a in head)
				if(head[a]==0)_0+="'"+u+"_"+a+"', "
				else if(head[a]==1)_1+="'"+u+"_"+a+"', "
				else _2+="'"+u+"_"+a+"', "
			for(a in body)
				if(body[a]==0)_0+="'"+u+"_"+a+"', "
				else if(body[a]==1)_1+="'"+u+"_"+a+"', "
				else _2+="'"+u+"_"+a+"', "
		}
	}catch(ex){httpMsgs.show500(res,ex,"<br>head_object_string level '"+u+"' : "+h+"<br>body_object_string level '"+u+"' : "+b)}
	_0=_0.slice(0,-2)
	_1=_1.slice(0,-2)
	_2=_2.slice(0,-2)
	if(_2=="")_2="''"
	// console.log(_0+'\n\n'+_1)
	
	sql="SELECT username,"+session.langue+",opt FROM _varchar WHERE username IN("+_0+");"
	sql_="SELECT username,"+session.langue+",opt FROM _text WHERE username IN("+_1+");"
	sql__="SELECT username,"+session.langue+",opt FROM _text WHERE username IN("+_2+");"
	db.executeSql(sql,(data,err)=>{
		if(err)httpMsgs.show500(res,err,"les données de la '"+er+"' n'ont pas pu etre sélectionnées\n"+sql)
		else
			db.executeSql(sql_,(data_,err)=>{
				if(err)throw err
				else
					db.executeSql(sql__,(data__,err)=>{
						if(err)throw err
						else{
							data.forEach(function(i,j){
								// console.log(i[session.langue]+"\n\n\n");
								obj_[i.username]=JSON.parse(i[session.langue])
							})
							data_.forEach(function(i,j){
								// console.log(i[session.langue]+"\n\n\n");
								if(i.username=="esperance_guerir_en_jesus")obj_[i.username]=JSON.parse(i["opt"]).length
								else obj_[i.username]=JSON.parse(i[session.langue])
								// if(i.username.indexOf("__s")!=-1)obj_["$"+i.username]=JSON.parse(i["opt"]).length
							})
							data__.forEach(function(i,j){
								// console.log(i[session.langue]+i.username+"\n\n\n");
								obj_[i.username]=JSON.parse(i[session.langue])
							})
							
							// console.log(JSON.stringify(obj_))
							obj.object=obj_
							if(obj.flash&&obj_[obj.flash.split("|&&|")[0]+"_flashes"]){
								obj.flash=obj_[obj.flash.split("|&&|")[0]+"_flashes"][obj.flash.split("|&&|")[1]]
								if(obj._flash)obj.flash=obj._flash+obj.flash
								if(obj.flash_add)obj.flash=obj.flash.replace('(__)',obj.flash_add)
							}
							if(obj.connected==1){
								console.log('yeeeeeeeeeeeeeeeeeeee');
								let cpt=""
								let _sql=[],tmp=0,tmp_=0
								obj.mon_compte={}
								obj.alert_top={}
								/*
								let msgs=JSON.parse(obj.username_.msgs)
								
								msgs.forEach(function(i){if(i.status=="unsee")tmp++;if(i.status=="unread")tmp_++})
								obj.alert_top.msgs_number=tmp
								obj.alert_top.msgs_number_=tmp_
								obj.alert_top.msgs=msgs
								*/
								/*
								let groups=JSON.parse(obj.username_.groups),
								groups=groups.mes_groupes
								groups=groups.toString()
//LA TRANSACTION NE FONCTIONNE PAS ENCORE
								// if(groups!="")_sql.push(`select * from groupes inner join user on ajouteur=user.id  inner join users on user.id=users.id where id_group in (${groups})`)
//requete sql pour obtenir le nom des groupes
								if(groups!="")_sql=`select * from groupes inner join user on ajouteur=user.id  inner join users on user.id=users.id where id_group in (${groups})`
								console.log(obj.username_.groups) 
								console.log(_sql)
								if(groups=="")httpMsgs.showHome(res,obj,filename)
								// else db.executeTransaction(_sql,(_data,err)=>{//LA TRANSACTION NE FONCTIONNE PAS ENCORE
								else db.executeSql(_sql,(_data,err)=>{
									if(err)throw err
									// obj.mon_compte.groups=_data[0]//POUR LA TRANSACTION
									obj.mon_compte.groups=_data
									console.log('ok')
									httpMsgs.showHome(res,obj,filename)
								})
								*/
								let msgs=fs.readFileSync(__dirname+"/../users/"+obj.username+"_"+obj.username_._href+"/msgs.js","utf8")
								// console.log(msgs)						
								msgs=msgs.substring(msgs.indexOf('['))
								msgs=JSON.parse(msgs)
								msgs.forEach(function(i){if(i.status=="unsee")tmp++;if(i.status=="unread")tmp_++})
								obj.alert_top.msgs_number=tmp
								obj.alert_top.msgs_number_=tmp_
								obj.alert_top.msgs=msgs
								let groups=fs.readFileSync(__dirname+"/../users/"+obj.username+"_"+obj.username_._href+"/my_groups.js","utf8")
								// console.log(groups)
								groups=groups.substring(groups.indexOf('['))
								obj.mon_compte.groups=JSON.parse(groups)
								console.log(obj.object.foi_modals_direct);
								console.log(obj.object.foi_modals_save.livres);
								console.log(obj.object.foi_tpls);
								console.log(obj.object.foi_cp_form);
								obj.object.foi_modals_direct.paroles = {homelies: {}, questions: {}}
								obj.object.foi_modals_save.livres = {...obj.object.foi_modals_save.livres, m_select_: {}}
								obj.object.foi_tpls = {...obj.object.foi_tpls, mult: {}, rc: {}}
								obj.object.foi_tpls.cp = {...obj.object.foi_tpls.cp, publi: {}}
								obj.object.foi_cp_form = {...obj.object.foi_cp_form, add: {}}
								httpMsgs.showHome(res,obj,filename)
								//  res.end("lààà")
							}else httpMsgs.showHome(res,obj,filename)
							//ce res.end() était sencé etre pour les url fichier, mais j'ai déjà réglé ce probleme en amont
							//ce res.edn() est sencé etre obselete
							// res.end()
						}
					})
			})
	})
}
var parse_table_pages_from_serverjs=function(res,obj,sql){
	if(!req.session.dataStored.all&&add_all_page=="")add_all_page+=",'all'"
	sql=sql.replace(')',add_all_page+")")
	// console.log("parse_table_pages_from_serverjs sql : "+sql+"\nsession.dataStored.all : "+session.dataStored.all)
	db.executeSql(sql,(data,err)=>{
		if(err)httpMsgs.show500(res,err,"la page d'accueil n'a pas pu etre affichée")
		else
			parse_table_pages(data,obj,res)
	})	
}
exports.parse_table_pages_from_serverjs=parse_table_pages_from_serverjs
//IMPOSSIBLE DE FAIRE DEUX REQUETE SQL EN MEME TEMPS
exports.testsql=(res)=>{
	db.executeSql("select * from users;select * from livres;",function(data,err){
		if(err)throw err
		else console.log(fn.objLength(data))
		res.end(JSON.stringify(data))
	})
}
exports.datas_all=()=>{
	// console.log("session.langue "+session.langue)
	let sql="SELECT * FROM pages WHERE username='all';"
	// let sql="SELECT "+session.langue+" FROM _varchar WHERE username IN('');"
	executeSql(sql,(data,err)=>{
		if(err)throw err
		else{
			// parse_table_pages(data[0].head_object_string,data[0].body_object_string,data[0].username)
			parse_table_pages(data)
		}
	})
}
exports.getList=(res)=>{
	db.executeSql("select * from livres",(data,err)=>{
		if(err)httpMsgs.show500(res,err)
		else httpMsgs.sendJson(res,data)
	})
}
exports.getList_file=(res,filename)=>{
	db.executeSql("select * from livres",(data,err)=>{
		if(err)httpMsgs.show500(res,err)
		else httpMsgs.show200_file(res,data,filename)
	})
}
exports.get=(req,res,id)=>{
	db.executeSql("select * from livres where id="+id,(data,err)=>{
		if(err)httpMsgs.show500(res,err)
		else httpMsgs.sendJson(res,data)
	})	
}
exports.logout=(req,res)=>{
	let sql=`delete from cookied where token="${req.cookies.jesuschristtv}"`
	res.cookie('jesuschristtv',"",{maxAge:-1,httpOnly:true})
	delete req.session.connected 
	req.logout() 
	
	db.executeSql(sql,(data,err)=>{console.log('logging out');if(err)throw err;else res.redirect('/')})
}
exports.setCookied=(req,res)=>{_setCookied(req,res)}
function _setCookied(req,res){
	// console.log(req.user)
	let id=(req.user||{}).id||1

	let rando="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",rando_=rando.length,i=0,cook=""
	while(i!=12){cook+=rando.substr(Math.floor(Math.random()*rando_),1);i++}
	let sql=`INSERT cookied(user_id,token) values(${id},"${cook}")`
	console.log(req.cookies)
	console.log(cook)
	console.log(sql)
	db.executeSql(sql,(data,err)=>{
		if(err){
			if(err.message.indexOf('ER_DUP_ENTRY')!=-1){
				console.log('un')
				db.executeSql("delete from cookied where user_id="+id,(data,err)=>{
					console.log('deux')
					if(err)throw err
					_setCookied(req,res)
				})
			}
		}else {
			res.cookie('jesuschristtv',cook,{maxAge:1000*60*60*24*7,httpOnly:true})
			console.log('connectééééé')
			delete req.session.connected
			res.redirect('/')
		}
	})
}
exports.checkCookied=(req,res,next)=>{
	var sql="select * from cookied inner join users on users.id=cookied.user_id inner join user on users.id=user.id where token='"+req.cookies.jesuschristtv+"'"
	console.log("checkCookied, req.cookies.jesuschristtv : "+req.cookies.jesuschristtv)
	db.executeSql(sql,(data,err)=>{
		if(err)httpMsgs.show500(res,err,sql)
			// httpMsgs.showHome(res,{connected:req.session.connected,flash:"impossible d'entrer les données dans la base de données"})
		else {
			if(data.length==1){
				var d=new Date()
				// console.log("data[0].expired_token.valueOf() "+data[0].expired_token.valueOf())
				// console.log("new Date().valueOf() "+d.valueOf()+" "+(data[0].expired_token.valueOf()-d.valueOf()))
				checkedCookied_=data[0]
				console.log('inch alllaaaah');
				console.log(data[0]);
				console.log(data);
				if(data[0].expired_token && d.valueOf()<data[0].expired_token.valueOf()){
					// console.log(data[0])
					console.log("checkCookied réussi,\net la valeur de token vaut : "+data[0].token)
					req.session.connected=1
					req.session.user=data[0]
				}else{
					console.log("checkCookied échoué, l'utilisateur n'a pas validé ses information à temps")
					//REQUETE SQL DELETE OBSELETE CAR LOGIN->SETCOOKIED EFFECTUE DEJA CETTE INSTRUCTION
					// db.executeSql("DELETE FROM cookied WHERE token='"+req.session.cookieToken+"'",(data_,err)=>{if(err)throw err;})
					req.session.connected=0
				}
				next()
				// cookieRedirect(req,res,true)
			}
			else if(data.length==0){
				//ce cas arrive ssi
				//le cookie du client n'existe pas dans la base (certainement dû à une opérateur réalisé par le serveur(...par errur ou par automatisme, genre token_expired expiré))
				// le cookie existe bien, mais l'utilisateur associé n'existe plus
				console.log("ce cas ne devrais pas arriver\n"+sql)
				res.cookie('jesuschristtv',"",{maxAge:-1,httpOnly:true})
				next()
			}
			// return true
		}
	})
}
var cookieRedirect=function(req,res,bool=false){
	let a=0,b="",obj_={},follow=false,sql="",head={},body={},add_all_page="",user=req.user||req.session.user,user_rand=Math.round(Math.random()*100)
	// console.log("cookieRedirect() req.session.connected"+req.session.connected)
	// req.session.connected=0
	if(!session.dataStored.all)add_all_page+=",'all'" 
	if(req.url!="/")add_all_page+=",'_all'"
	//let obj={_href:"",connected:req.session.connected,pays:req.session.pays,langue:req.session.langue}
	let obj={
		protocol:req.protocol,
		get_:req.get('host'),
		ori:req.originalUrl,url_:req.url,
		_:(req.protocol + '://' + req.get('host') + req.originalUrl).replace(req.url,''),
		_href:req.originalUrl.indexOf('jctv')==-1?"":"/jctv",
		connected:req.session.connected,
		pays:req.session.pays,
		langue:req.session.langue
	}
	if(obj.connected){
		if(!req.session.user_rand)req.session.user_rand=user_rand
		user_rand=req.session.user_rand
		obj.user_rand=user_rand
		obj.username=user.id
		obj._username=req.session.user_rand*user.id
		obj.username_=fn.objDup(user)
		bool_compiled_file(req,obj)
	}else obj.username=0
	// console.log('ok')
	// console.log(obj)
	console.log("ressource::cookieRedirect : ici s'arrete la course pour tous les fichier (qui ne sont donc pas des url-chemins)")
	console.log(obj);
	console.log(req.url);
	// console.log("obj : ")
	// console.log(obj)
	switch(req.url){
		case"/":
			// obj={connected:req.session.connected}
			sql="select * from pages where username IN('accueil'"+add_all_page+")"
			//res.write(sql)
			// res.end(sql) 
			console.log('siiiiiiii')
			db.executeSql(sql,(data,err)=>{
				if(err)httpMsgs.show500(res,err,"la page d'accueil n'a pas pu etre affichée")
				else
					parse_table_pages(data,obj,res)
			})
			// follow=true
		break
		case"/jesus-christ-foi-chretienne":
			// obj={connected:req.session.connected}
			// filename="jesus-christ-foi-chretienne"			
			sql="select * from pages where username IN('foi'"+add_all_page+")"
			db.executeSql(sql,(data,err)=>{
				if(err)httpMsgs.show500(res,err,"la page foi n'a pas pu etre affichée")
				else
					parse_table_pages(data,obj,res,req.url.substr(1))
			})
		break
		case"/vierge-marie-charite-chretienne":
			// obj={connected:req.session.connected};
			// filename="vierge-marie-charite-chretienne"
			sql="select * from pages where username IN('charite'"+add_all_page+")"
			db.executeSql(sql,(data,err)=>{
				if(err)httpMsgs.show500(res,err,"la page charite n'a pas pu etre affichée")
				else
					parse_table_pages(data,obj,res,req.url.substr(1))
			})
		break
		case"/dieu-le-pere-esperance-chretienne":
			// obj={connected:req.session.connected};
			// filename="vierge-marie-charite-chretienne"
			sql="select * from pages where username IN('esperance'"+add_all_page+")"
			db.executeSql(sql,(data,err)=>{
				if(err)httpMsgs.show500(res,err,"la page esperance n'a pas pu etre affichée")
				else
					parse_table_pages(data,obj,res,req.url.substr(1))
			})
		break
		default: 
			if(bool)res.redirect(req.url)
			else res.end("404")
		break
	}
	// return false
	// res.end()
	// console.log('fn.objLength(obj) : '+fn.objLength(obj))
	// for(a in obj)b+=a+","
	// console.log("b : "+b)
	if(fn.objLength(obj)==0)res.end()
	else if(follow)httpMsgs.showHome(res,obj,filename)
}
exports.cookieRedirect_=cookieRedirect
exports.login=(req,res,reqBody)=>{
	console.log('login start')
	let a=""
	try{
		if(!reqBody)throw new Error('Input not valid : reqBody doesnt exist')
		let data=reqBody
		let sql="SELECT id,nom,prenom,pseudo FROM users WHERE email='"+data.email+"' and pwd='"+data.pwd+"';"
		db.executeSql(sql,(data_,err)=>{
			if(err)throw err
			else{
				if(data_.length==1)setCookied(req,res,data_[0].id,data_[0])
				else if(data_.length==0){
					req.session.connected=0
					let obj={connected:req.session.connected,object:{},flash_add:data_.email,flash:"accueil|&&|login"}
					if(!session.dataStored.all)add_all_page+=",'all'"
					sql="select * from pages where username IN('accueil'"+add_all_page+")"
					db.executeSql(sql,(data,err)=>{
						if(err)httpMsgs.show500(res,err,"la page foi n'a pas pu etre affichée")
						else
							parse_table_pages(data,obj,res)
					})
					// httpMsgs.showHome(res,{connected:req.session.connected,object:{},flash_add:data_.email,flash:"accueil|&&|login"})
				}
				//CE ELSE EST OBSELETE, IL NE PEUT ETRE ATTEINT CAR users.email EST UNE CLE UNIQUE, LE RESULTAT DE LA REQUETE RENVOIE FORM+CEMENT SOIT 0 SOIT 1 RESULTAT
				else httpMsgs.show500(res,err,"Cette utilisateur accuse un doublon")
			}
		})
	}catch(ex){
		httpMsgs.show500(res,ex)
	}
}
exports.passport=(req,res,reqBody,adds,table,valids)=>{
	
	
	signin(req,res,reqBody,adds,table,valids)
}
function signin(req,res,reqBody,adds,table,valids){
	// console.log("adds "+JSON.stringify(adds))
	// console.log("valids "+valids)
	// console.log(adds)
	return;
	if(!adds)adds={}
	if(!valids)valids=""
	try{
		if(!reqBody)throw new Error('Input not valid : reqBody doesnt exist')
		// reqBody=reqBody.replace("=",'":"')
		let data=reqBody
		//////////////////////////////////////////////////////
		/////////////////variable à remplir//////////////////
		//////////////////////////////////////////////////////
		data.href=""
		//////////////////////////////////////////////////////
		//////////////////////////////////////////////////////
		// let data=JSON.parse('{"else":"ahgjh"}')
		let a="",b="",c="",e=0,f={};
		for(var i in adds)
			data[i]=adds[i]
		// console.log("data "+JSON.stringify(data))
		for(var i in data)
			if(i!="_method_"&&valids.indexOf(i)!=-1)
				a+="`"+i+"`,"
		for(var i in data){
		// console.log("___b___"+b)
			if(i!="_method_")
				if(valids.indexOf(i)!=-1&&data[i]!="")
					if(typeof data[i]=="string")b+='"'+data[i]+'",'
					else if(typeof data[i]=="number"||typeof data[i]=="integer") b+=data[i]+','
					else throw new Error("data type invalid : "+i+" type is "+typeof data[i])
				else if(valids.indexOf(i)!=-1&&data[i]==""){
					req.session.connected=0
					httpMsgs.showHome(res,{connected:req.session.connected,flash_add:i,flash:"accueil|&&|field_void"});
					console.log("___bd___"+req.session.connected);
					return false
				}
				//LA VALEUR DE L'INPUT name=i NE FAIT PAS PARTIE DU STRING valids
				//DEDANS SE TROUVE: birth,descr,href,addr...etc
				//descr,confession FONT PARTIES DE LA VARIABLE adds
				else f[i]=data[i]
		}
		// console.log("___b___"+b)
		if(fn.objLength(f)==0){
			a=a.slice(0,-1)
			b=b.slice(0,-1)
		}else{
			a+="`infos`"
			b+="'"+JSON.stringify(f)+"'"
		}
		// console.log("___b___"+b)
		b=unescape(b)
		// console.log("___b___"+b)
		let sql="INSERT INTO "+table+" ("+a+") VALUES("+b+");"
		console.log("requete sql : "+sql)
		db.executeSql(sql,(data_,err)=>{
			if(err)
				// httpMsgs.show500(res,err)
				if(err.message.indexOf('ER_DUP_ENTRY')==-1)httpMsgs.show500(res,err,sql)
				else{
					let obj={connected:req.session.connected,_flash:err.message,flash:"accueil|&&|signin_DUP"}
					if(!session.dataStored.all)add_all_page+=",'all'"
					sql="select * from pages where username IN('accueil'"+add_all_page+")"
					db.executeSql(sql,(data,err)=>{
						if(err)httpMsgs.show500(res,err,"la page foi n'a pas pu etre affichée")
						else
							parse_table_pages(data,obj,res)
					})
					// httpMsgs.showHome(res,{connected:req.session.connected,flash:err+" == ER_DUP_ENTRY : impossible d'entrer cet utilisateur"})
				}
			else{
				let obj={connected:0,signedin:true}
				if(!session.dataStored.all)add_all_page+=",'all'"
				sql="select * from pages where username IN('accueil'"+add_all_page+")"
				db.executeSql(sql,(data,err)=>{
					if(err)httpMsgs.show500(res,err,"la page foi n'a pas pu etre affichée")
					else
						parse_table_pages(data,obj,res)
				})
				// httpMsgs.showHome(res,{connected:0,signin:{},signedin:true})
					
				// var k=0;for(var i in data)k++;
				// console.log("data : "+k+data.nom+data.prenom+data.pseudo+data.email+data.pwd)
				
				// sql="SELECT id FROM users WHERE email='"+data.email+"' and pwd='"+data.pwd+"'"
				// db.executeSql(sql,(data__,err)=>{
					// if(err)httpMsgs.show500(res,err)
					// else{
						// httpMsgs.showHome(res,{connected:0,first_logged_in:{}})
					// }
				// })
			}
		})
	}catch(ex){
		httpMsgs.show500(res,ex)
	}
}
//FONCTION APPELE PAR login()
function setCookied_(req,res,id,output){res.end('ok')
}
exports.search=(req,res,tmp,bool=true)=>{
	let checked=req.params.checked,dates=req.params.dates,search=req.params.search,transaction=[]
	let tab=checked.split(',')
	let date0=dates.split(',')[0]
	console.log(checked)
	console.log(checked.split(','))
//JE NE SAIS PAS ENCORE DANS QUEL MESURE UTILISER date1, 
//ET COMMENT CREER UNE CONDITION QUI PEUT INCLURE OU NE PAS INCLURE date1
	let date1=dates.split(',')[1]
	if(date0=="")date0=new Date().toLocaleDateString()
	tab.forEach(function(i){
		switch(i){
			case"multimedias":
				transaction.push(`select * from livres where titre like "%${search}%" or short_descr like "%${search}%" or descr like "%${search}%" or title like "%${search}%"`)
				transaction.push(`select * from images where titre like "%${search}%" or short_descr like "%${search}%" or descr like "%${search}%"`)
				transaction.push(`select * from musics where titre like "%${search}%" or short_descr like "%${search}%" or descr like "%${search}%"`)
				transaction.push(`select * from films where titre like "%${search}%" or short_descr like "%${search}%" or descr like "%${search}%"`)
			break
			case"evenements":
				transaction.push(`select * from cp where debut > ${date0} and (titre like "%${search}%" or descr like "%${search}%")`)
				transaction.push(`select * from rc where jour > ${date0} and ( descr like "%${search}%")`)
				transaction.push(`select * from charite where jour > ${date0} and (titre like "%${search}%" or descr like "%${search}%")`)
				transaction.push(`select * from solidarite where jour > ${date0} and (titre like "%${search}%" or descr like "%${search}%")`)
				transaction.push(`select * from actionsocial where jour > ${date0} and (titre like "%${search}%" or descr like "%${search}%")`)
				transaction.push(`select * from benevolat where debut > ${date0} and (titre like "%${search}%" or descr like "%${search}%")`)
			break
			case"groupes":
				transaction.push(`select * from groupes where titre like "%${search}%" or descr like "%${search}%"`)
			break
			case"pages":
				transaction.push(`select * from map inner join _keyvalue_ on(fk=id_kv) where titre like "%${search}%" or value like "%${search}%"`)
			break
			case"membres":
				transaction.push(`select * from users where _href like "%${search}%"`)
			break
			case"posts":
				transaction.push(`select * from murs where titre like "%${search}%" or descr like "%${search}%"`)
			break
			default:res.end('0')
			break
		}
	})
	console.log(transaction+"!!!!!")
	db.executeTransaction(transaction,(data,err)=>{
		if(err)throw err
		let tmp=JSON.stringify(data)
		res.end(tmp)
	})
}
exports.nav_bar=(req,res,tmp,bool=true)=>{
	//0=user account, 1=map, 2=iwai
	let pays=req.params.pays||"",user=req.user||req.session.user,user_rand=Math.round(Math.random()*100)
	
	req.session.connected=typeof req.session.connected=="undefined"?0:req.session.connected
	let connected,add_all_page=",'pages','_all'"
	let obj={connected:req.session.connected,pays:req.session.pays,langue:req.session.langue};
	if(pays!="")obj.pays=pays
	if(obj.connected){
		if(!req.session.user_rand)req.session.user_rand=user_rand
		user_rand=req.session.user_rand
		obj.user_rand=user_rand
		obj.username=user.id
		obj._username=req.session.user_rand*user.id//cette instruction est obselete car obj._usermane est surchargé dans le switch case=3
		obj.username_=fn.objDup(user)
		bool_compiled_file(req,obj)
	}else obj.username=0
	sql="select * from pages where username IN('all'"+add_all_page+")"
	new Promise(
		function(resolv,reject){
			if(bool===false)resolv([])
			else
				db.executeSql(sql,(data,err)=>{
					if(err)reject(err)
					else resolv(data)
				})
		}
	).then((r)=>{
		let k,a,tab={},data,data_,data__,tab_=[]
		// console.log(r) 
		// console.log(tmp)
		// console.log(obj) 
		switch(tmp){
			case 1:
				new Promise(
					function(resolv,reject){
						db.executeSql("select value from _keyvalue_ where key_='map_"+obj.pays+"'",(data,err)=>{
							if(err)reject(err)
							else 
								db.executeSql("select * from map where pays='"+obj.pays+"'",(data_,err)=>{
									if(err)reject(err)
									else 
										db.executeSql("select id_pub,titre,descr,opt from pub where date+interval 7 day>=now() and pays='"+obj.pays+"'",(data__,err)=>{
											if(err)reject(err)
											else resolv([data,data_,data__])
										})
								})
						})
					}
				).then((rr)=>{
					if(bool){
						k=JSON.parse(r[2].body_object_string)
						for(a in k)if(a.indexOf('iwai')!=-1||a.indexOf('user_account')!=-1)delete k[a]
						r[2].body_object_string=JSON.stringify(k)
					}
					console.log('hourra')
					// console.log(rr[0][0].value)
					
					obj.localdatas={}
					obj.localdatas=JSON.parse(rr[0][0].value)
					obj.pub=rr[2]
					// console.log(rr[0])
					console.log(rr[2])
					rr[1].forEach(function(i){
						// console.log(i)
						if(typeof tab[i.categorie]=="undefined")tab[i.categorie]=0
						tab[i.categorie]++
						if(i.ajouteur==obj.username)tab_.push(i)
					})
					console.log(tab)
					obj.localdatas.stats=tab
					if(tab_.length!=0)obj.map_created=tab_
					// rr.forEach(function(i){
					// }
//POUR LE CAS
//url == "/_/map/:pays" ======bool=false
					if(bool)parse_table_pages(r,obj,res,"map")
					else res.end(JSON.stringify([rr[0][0].value,rr[1],rr[2],[tab,tab_]]))
					// else res.end(JSON.stringify([[],rr[1],rr[2],[tab,tab_]]))
				})
			break
			case 2:
				let data,data_,now=new Date(),now_=+now
				k=JSON.parse(r[2].body_object_string)
				for(a in k)if(a.indexOf('map')!=-1||a.indexOf('user_account')!=-1)delete k[a]
				r[2].body_object_string=JSON.stringify(k)
				
				new Promise(
					function(resolve,reject){
						// let sql=`select ${obj.langue} from _text where username="pages_iwai_iwai"`
						let sql=`select ${obj.langue} from _text_ where username="pages_iwai_list"`
						
						db.executeSql(sql,(data,err)=>{
							if(err)reject(err)
							else{
								// sql=`select ${obj.langue} from _text_ where username="pages_iwai_list"`
								// db.executeSql(sql,(data_,err)=>{
									// if(err)reject(err)
									// else	resolve([data,data_])
								// })
								if(err)reject(err)
								else	resolve(data)
							}
						})
					}
				).then(function(rr){
					// console.log(rr)
					// let tmp='"'+rr[0].fr.replace(/"/g,'\\"')+'"'
					// console.log(tmp)
					// tmp=JSON.parse(tmp)
					// console.log(tmp)
					
					let iwai_list=JSON.parse(rr[0][obj.langue])
					let d=new Date()
					let year=d.getFullYear()
					let cpt=""
					for(a in iwai_list){
						let b=a.substring(3)+'-'+a.substring(1,3)+"-"+year
						// console.log(b)
						let c=+new Date(b)
//IL FAUT DECREMENTER c_ DE 10 JOURS //obselete
						let c_=c
						// console.log(b)
						// console.log(c) 
						// if(now>c_&&now<c)obj.iwai_infos={date:c,name:iwai_list[a][0],short_descr:iwai_list[a][1]}
						
						iwai_list[a][2]=c
						// console.log(iwai_list[a])
						console.log(cpt)
						console.log(c)
						if(c>now_)cpt=iwai_list[a]
							if(cpt=="")cpt=iwai_list[a]
							else if(c<cpt.date)cpt=iwai_list[a]
					}
					// if(!obj.iwai_infos)obj.iwai_infos={date:"N.C",name:"N.C",short_descr:"N.C"}
					obj.iwai_infos={date:cpt[2],name:cpt[0],short_descr:cpt[1],escape:escape(cpt[0])+'_'+obj.langue}
					
					parse_table_pages(r,obj,res,"iwai")
				})
				
			break
			case 3:
					k=JSON.parse(r[2].body_object_string)
					for(a in k)if(a.indexOf('iwai')!=-1||a.indexOf('map')!=-1)delete k[a]
					r[2].body_object_string=JSON.stringify(k)
					
					new Promise(
						function(resolve,reject){
							let data,data_
							console.log("req.url.substr(req.url.lastIndexOf('/')+1) : "+req.url.substr(req.url.lastIndexOf('/')+1))
							db.executeSql(`select * from users natural join user where _href="${req.url.substr(req.url.lastIndexOf('/')+1)}"`,(data,err)=>{
								if(err)reject(err)
								else 
									db.executeSql(`select * from map inner join _keyvalue_ on id_kv=fk where map.ajouteur=${obj.username}`,(data_,err)=>{
										if(err)throw err
										resolve([data,data_])
								}) 
							}) 
						}
					).then(function(rr){
						console.log("rr.length : "+rr.length)
						obj._username=rr[0][0]
						obj.pages=rr[1]
						console.log(obj._username.informations)
						obj._username.informations=JSON.parse(obj._username.informations) 
						
						obj._username.likes=JSON.parse(obj._username.likes)
						obj._username.likes_count=[obj._username.likes.amen.length,obj._username.likes.hosanna.length,obj._username.likes.alleluia.length]
						obj._username.likes_count_=obj._username.likes_count[0]+obj._username.likes_count[1]+obj._username.likes_count[2]
						obj._username.following=JSON.parse(obj._username.following)
						obj._username.following_count=obj._username.following.length
						obj._username.following=obj._username.following.slice(-10)
						obj._username.livredor=JSON.parse(obj._username.livredor)
						obj._username.livredor_count=obj._username.livredor.length
						obj._username.groups=JSON.parse(obj._username.groups)
						obj.pages_=obj.pages.length==0?false:true
						obj._username.groups_=fn.objLength(obj._username.groups)==0?false:true
						obj.url=req.url
						obj.sameuser=obj._username.id==obj.username?true:false
						for(a in obj._username.informations){
							if(obj._username.informations[a]=="")obj._username.informations[a]="N.C"
							else if(a=="birth")obj._username.informations.birth=new Date().getFullYear()-new Date(parseInt(obj._username.informations.birth)).getFullYear()
						}
						if(obj._username._descr=="")obj._username._descr="N.C"
						
						let kk="trouver un moyen de facilement comptabiliser la totalité des entrées"
						let k=0 
						let tab=[]
						for(let i=obj._username.following.length-1;i>=0;i--){
							if(k==10)i=-1
							obj._username.following[i].date=new Date(obj._username.following[i].date).toLocaleDateString()
							tab.push(obj._username.following[i])
							k++
						}
						obj._username.following=tab
						k=0
						obj._username.participed=JSON.parse(obj._username.participed)
						for(a in obj._username.participed){
							let tab=obj._username.participed[a].slice(-10),tb=[]
							tab.forEach(function(i){k++
								tb.push({cat:"participed",title_id:a,id:i.substr(0,i.indexOf('_'))*user_rand,date:new Date(parseInt(i.substr(i.indexOf('_')+1))).toLocaleDateString})
							})
							obj._username.participed[a]=tb
						}
						obj._username.participed_=kk
						k=0
						obj._username.created=JSON.parse(obj._username.created)
						for(a in obj._username.created){
						let tab=obj._username.created[a].slice(-10),tb=[]
							tab.forEach(function(i){k++
								tb.push({cat:"created",title_id:a,id:i.substr(0,i.indexOf('_'))*user_rand,date:new Date(parseInt(i.substr(i.indexOf('_')+1))).toLocaleDateString})
							})
							obj._username.created[a]=tb
						}
						obj._username.created_=kk
						k=0
						obj._username.shared=JSON.parse(obj._username.shared)
						for(a in obj._username.shared){
						let tab=obj._username.shared[a].slice(-10),tb=[]
							tab.forEach(function(i){k++
								tb.push({cat:"shared",title_id:a,id:i.substr(0,i.indexOf('_'))*user_rand,date:new Date(parseInt(i.substr(i.indexOf('_')+1))).toLocaleDateString})
							})
							obj._username.shared[a]=tab
						}
						obj._username.shared_=kk
						k=0
						obj._username.liked=JSON.parse(obj._username.liked)
						for(a in obj._username.liked){
							let tab=obj._username.liked[a].slice(-10),tb=[]
							tab.forEach(function(i){k++
								tb.push({cat:"liked",title_id:a,id:i.substr(0,i.indexOf('_'))*user_rand,date:new Date(parseInt(i.substr(i.indexOf('_')+1))).toLocaleDateString})
							})
							obj._username.liked[a]=tb
						}
						obj._username.liked_=kk
						k=0
						obj._username.published=JSON.parse(obj._username.published)
						for(a in obj._username.published){
							let tab=obj._username.published[a].slice(-10),tb=[] 
							tab.forEach(function(i){k++
								tb.push({cat:"published",title_id:a,id:i.substr(0,i.indexOf('_'))*user_rand,date:new Date(parseInt(i.substr(i.indexOf('_')+1))).toLocaleDateString})
							})
							obj._username.published[a]=tb
						}
						obj._username.published_=kk
						
						parse_table_pages(r,obj,res,"user_account")
					})
			break
			default:console.log("tun ne devrai pas etre ici Monsieur h)")
			break
		}
	}).catch((r)=>{console.log(r)})
	// res.end('ok')
}
exports.write_msg_=(req,res)=>{
	let msg=req.params.msg,id=req.params.id/req.session.user_rand,ajouteur=req.params.ajouteur/req.session.user_rand,ajouteur_=req.params.ajouteur_,d=+new Date()
	let sql=`select msgs from user where id=${id}`
	console.log(sql)
	db.executeSql(sql,(data,err)=>{
		if(err)res.end('0')
		else{
			console.log(data[0].msgs)
			let msgs=JSON.parse(data[0].msgs)
			msgs.push({status:"unsee",id:ajouteur,ajouteur:ajouteur_,msg:msg,date:d})
			msgs=JSON.stringify(msgs).replace(/"/g,"\\\"")
			sql=`update user set msgs="${msgs}" where id=${id}`
			console.log(sql)
			db.executeSql(sql,(data,err)=>{
				if(err)res.edn('0')
				else res.end('1')
			})
		}
	})
}
exports.write_msg=(req,res)=>{
	let msg=req.params.msg,id=req.params.id/req.session.user_rand,ajouteur=req.params.ajouteur/req.session.user_rand,ajouteur_=req.params.ajouteur_,d=+new Date()
	db.executeSql("select id,_href from users where id="+id,(data,err)=>{
		if(err)res.edn('0')
		else{
			let dir=__dirname+"/../users/"+data[0].id+'_'+data[0]._href
			let file=fs.readFileSync(dir+"/msgs.js","utf8")
			console.log(file)
			let msgs=JSON.parse(file.substring(file.indexOf('[')))
			msgs.push({status:"unsee",id:ajouteur,ajouteur:ajouteur_,msg:msg,date:d})
			msgs=JSON.stringify(msgs)
			console.log(msgs)
			fs.writeFileSync(dir+"/msgs.js","var msgs="+msgs)
			req.session.bool_compiled_file=false
			
			res.end('1')
		}
	})
}
exports.search_in_acted=(req,res)=>{
	let id=req.params.id/req.session.user_rand,acted=req.params.acted,on=req.params.on,value=req.params.value,data,data_,a,i,d,d_=new Date(value),now=new Date()
	
	
	let sql=`select ${acted} from user where id=${id}`
	console.log(sql)
	db.executeSql(sql,(data,err)=>{
		if(err)throw err
		let tmp=JSON.parse(data[0][acted]),tmp_,tmp__,tab={},tab_=[]
		for(a in tmp){
			tmp[a].forEach(function(i){
				tmp_=i.substring(0,i.indexOf('_'))
				tmp__=parseInt(i.substring(i.indexOf('_')+1))
				d=new Date(tmp__)
				if(on=='change'){
					// console.log(d+"__"+d_)
					if(d.toLocaleDateString()==d_.toLocaleDateString()){
						if(typeof tab[a]=="undefined")tab[a]=[]
						tab[a].push(i)
					}
				}else{
					console.log(d.getFullYear()+'un'+now.getFullYear())
					// if(d.getFullYear()==now.getFullYear()){
						console.log('deux')
						if(typeof tab[a]=="undefined")tab[a]=[]
						tab[a].push(tmp_)
					// }
				}
			})
		}
		if(on=='change'){
			if(fn.objLength(tab)!=0){
				res.end(JSON.stringify(tab))
			}else res.end('0')
		}else{
			if(fn.objLength(tab)!=0){
				sql=``
				for(a in tab){
					if(sql!='')sql+=" UNION "
					sql+=`select titre from ${a} where _id IN (${tab[a].toString()})`
				}
				console.log(sql)
				db.executeSql(sql,(data_,err)=>{
					if(data_[0].length!=0){
						tab={}
						value=unescape(value)
						data_.forEach(function(i){
//IL RESTE A TRIER LE RESULTAT AVEC value
							// if(i.titre.indexOf('')
							// tab[..]=...
						})
						res.end(JSON.stringify(tab))
					}else res.end('0')
				}) 
			}else res.end('0')
		}
	})
}
exports.livredor=(req,res)=>{
	let id=req.params.id/req.session.user_rand,d=new Date(),data,data_
	d=+d
	d=id+"_"+d
	console.log(typeof livredor_+"___"+id)
	
	let sql=`select livredor from user where id=${id}`
	console.log(sql+"____"+req.params.id+"____"+req.session.user_rand) 
	db.executeSql(sql,(data,err)=>{
		let livredor=JSON.parse(data[0].livredor)
		let a={}
		a.id=id
		a.user=req.body.user
		a.date=d
		a.msg=req.body.livredor
		livredor.push(a)
		console.log(livredor)
		livredor=JSON.stringify(livredor).replace(/"/g,"\\\"")
		sql=`update user set livredor="${livredor}" where id=${id}`
		console.log(sql)
		db.executeSql(sql,(data_,err)=>{
			if(err)res.end('0')
			res.redirect(req.body.redirect)		
		})
	})
}
exports.show_group=(req,res)=>{
	let id=req.params.id
	
	console.log(id)
	id=id/req.session.user_rand
	console.log(id)
	let sql=`select * from groupes where id_group=${id}` 
	
	db.executeSql(sql,(data,err)=>{
		if(err)throw err
		data=data[0]
		data.iframe=data.img.toLowerCase()+data.titre.replace(' ','_')
		res.end(JSON.stringify(data))
	})
}
exports.add_group=(req,res)=>{
	
	let sql=`insert groupes(ajouteur,img,titre,descr,membres,conversations,keywords,date) values(${req.body.ajouteur},"${req.body.img}","${req.body.titre}","${req.body.descr}","{}","{}","${req.body.keywords}",now())`
	
	db.executeSql(sql,(data,err)=>{
		if(err)throw err
		let g=JSON.parse(req.session.user.groups)
		g[req.body.titre]=data.insertId
		g=JSON.stringify(g).replace(/"/g,"\\\"")
		sql=`update user set groups="${g}" where id=${req.session.user.id}`
		db.executeSql(sql,(data_,err)=>{
			if(err)throw err
			acted(req.body.ajouteur,"groupes","created",data.insertId)
			res.redirect(req.body.redirect)
		})
	})
}
exports.promo_map=(req,res)=>{
	let data,data_,data__,d=new Date()
	d=+d
	
	let sql=`INSERT pub(elt_id,ajouteur,titre,descr,opt) VALUES(${req.body.which},${req.body.ajouteur},"${req.body.titre}","${req.body.descr}","${req.body.geo}")`
	
	db.executeSql(sql,(data,err)=>{
		console.log(sql)
		if(err)throw err
		sql=`select value,fk from map inner join _keyvalue_ on(map.fk=_keyvalue_.id_kv) where id_map=${req.body.which}`
		db.executeSql(sql,(data_,err)=>{
			if(err)throw err
			console.log(sql)
			console.log(data_)
			let fk=data_[0].fk
			data_=JSON.parse(data_[0].value)
			if(!data_.promotion)data_.promotion=[]
			data_.promotion.push(data.insertId+"_"+d)
			data_=JSON.stringify(data_).replace(/"/g,"\\\"")
			sql=`update _keyvalue_ set value="${data_}" where id_kv=${fk}`
			db.executeSql(sql,(data__,err)=>{
				if(err)throw err
				res.redirect(req.body.redirect)
			})
		})
	})
}
exports.add_map=(req,res)=>{
	let ok
	
	let sql=`INSERT _keyvalue_(key_,value) VALUES("mapped_${req.body.pays}","{}")`
	 
	db.executeSql(sql,(data,err)=>{
		if(err)throw err
		let id=data.insertId
		console.log('_______________'+id+'_______')
		sql=`INSERT map(fk,ajouteur,categorie,diocese,titre,ville,quartier,pays) VALUES(${id},${req.body.ajouteur},"${req.body.categorie}","${req.body.diocese}","${req.body.titre}","${req.body.ville}","${req.body.quartier}","${req.body.pays}")`
		db.executeSql(sql,(data,err)=>{
			if(err)throw err
			acted(req.body.ajouteur,"map","created",data.insertId)
			res.redirect(req.body.redirect)
		})
	})
}
exports.uniq2=(req,res)=>{}
exports.uniq1=(req,res)=>{}
exports.uniq0=(req,res)=>{
	let lien=req.params.lien,lien_=lien.replace(/-/g,'_'),info=req.params.info,tmp="",sql_
	let obj={logos:"titre"}
	
	let sql="SELECT fr FROM _text WHERE username='foi_liens'"
	db.executeSql(sql,(data,err)=>{
		if(err)throw err
		data=JSON.parse(data[0]) 
		if(!(tmp=data[lien_]))throw"le lien '"+lien+"' n'existe pas :("
		switch(tmp){
			case"logos":sql_="foi";sql=`...inner.... WHERE titre="${info.replace(/-/g,' ')}"`
			case"livres":sql_="foi";sql=`...inner.... WHERE titre="${info.replace(/-/g,' ')}"`
			case"livres_":sql_="foi";sql=`...inner.... WHERE titre="${info.replace(/-/g,' ')}"`
			break
			default:throw"l'origine de lien data[lien_] : '"+data[lien_]+"', pour le lien '"+lien+"' n'a pas de source"
			break
		}
		db.executeSql(sql,(data,err)=>{
			if(err)throw err
			console.log('le fichier "'+tmp+'.ejs" doit exister')
			console.log("les données suivantes sont chargées : '"+sql_+"' 'all' et '_all'")
			console.log("les données spécifiques à la page unique sont chargé dans 'locals.value.uniq'")
			obj={connected:req.session.connected,uniq:data}
			// filename="jesus-christ-foi-chretienne"			
			sql="select * from pages where username IN('"+sql_+"','all','_all')"
			db.executeSql(sql,(data_,err)=>{
				if(err)httpMsgs.show500(res,err,"la page foi n'a pas pu etre affichée")
				else
					parse_table_pages(data_,obj,res,tmp)
			})
		})
	})
}
exports.confession=(req,res)=>{
	let msg=req.params.msg||"",sql
	msg=unescape(msg)
	if(msg!="")sql="SELECT nom,prenom,pseudo,_href FROM clerger WHERE nom like '%"+msg+"%' OR prenom like '%"+msg+"%' OR pseudo like '%"+msg+"%'"
	else	sql="INSERT confessions(`ajouteur`,`type`,`clerger`,`msg`,`conversation`,`date`) VALUES(\""+req.body.ajouteur+"\",\""+req.body.type+"\",\""+req.body.clerger+"\",\""+req.body.msg+"\",\"{}\",now())"
	
	console.log(msg)
	console.log(sql)
	db.executeSql(sql,(data,err)=>{
		if(err)res.end('0')
		else{
			if(msg!="")res.end(JSON.stringify(data)) 
			else res.redirect(req.body.redirect)
		}
	})
}
////////////////////////////////////
//CETTE FONCTION COMPORTE AU MOINS UNE INCOHERENCE	:	SI USER N4EXISTE PAS DANS LA TABLE, LA 1ERE REQUETE NE RETOURNE RIEN, PUIS L'uPLET 'guerir' N'EXISTE PAS
////////////////////////////////////
exports.guerir=(req,res)=>{
	let user=req.params.user,tmp,i=new Date()
	i=+i
	
	let sql="SELECT guerir FROM user WHERE id="+user
	db.executeSql(sql,(data,err)=>{
		if(err)res.end('0')
		else{
			tmp=JSON.parse(data[0].guerir)
			tmp.push(i)
			tmp=JSON.stringify(tmp)
			sql='UPDATE user SET guerir="'+tmp+'" WHERE id='+user
			db.executeSql(sql,(data,err)=>{
				if(err)res.end('0')
				else{
					sql="SELECT opt FROM _text WHERE username='esperance_guerir_en_jesus'"
					db.executeSql(sql,(data,err)=>{
						if(err)res.end('0')
						else{
							console.log(data[0].opt)
							tmp=JSON.parse(data[0].opt)
							tmp.push(parseInt(user))
							tmp=JSON.stringify(tmp)
							console.log(tmp)
							sql='UPDATE _text SET opt="'+tmp+'" WHERE username="esperance_guerir_en_jesus"'
							db.executeSql(sql,(data,err)=>{
								if(err)res.end('0')
								else res.end('1')
							})
						}
					})
				} res.end('1')
			})
		}
	})
}
////////////////////////////////////
////////////////////////////////////
exports.sauver=(req,res)=>{
	let type=req.params.type||false,ids=req.params.ids,sql
	
	if(type){
		if(ids=="_")sql=`SELECT * FROM changer WHERE type=${type} AND ajouteur!=2` 
		else sql=`SELECT * FROM changer WHERE id not in (${ids}) AND ajouteur!=2` 
	}else sql=`SELECT texte FROM changer WHERE id=${ids}` 
	console.log(sql) 
	db.executeSql(sql,(data,err)=>{
		if(err)throw err
		else res.end(JSON.stringify(data))
	})
	
}
exports.discussions=(req,res)=>{
	let bool=req.params.bool||false,without=req.params.without||false,sql,p=""
	
	if(req.url.indexOf('discussions_')!=-1)p="_"
	
	console.log(req.body.ajouteur)
	//Quand on appuie sur le li.add et qu'on valide le formulaire
	if(bool===false){
		sql='INSERT INTO discussions'+p+'(`ajouteur`,`titre`,`p`,`comments`,`responses`,`likes`,`status`) VALUES("'+req.body.ajouteur+'","'+req.body.titre+'","'+req.body.p+'","{}","{}","{}",0)'
		db.executeSql(sql,(data,err)=>{
			if(err)throw err
			res.redirect(req.body.redirect)
		})
	}else{
		//Quand on passe par ligne de command (directement en entrant une url)
		if(!without)
			sql=`SELECT * FROM discussions${p} WHERE status=${bool} ORDER BY date ASC LIMIT 10`
		else
		//Quand on appuie sur le li.moreelse 
			sql=`SELECT * FROM discussions${p} WHERE status=${bool} AND id_d NOT IN (${without}) ORDER BY date ASC LIMIT 10`
		console.log(sql)
		db.executeSql(sql,(data,err)=>{ 
			if(err)throw err
			else{
				data=JSON.stringify(data)
				if(!without)
					fs.writeFile("./files/status"+bool+p+".js",data,(err)=>{ 
						if(err)throw err
						console.log("fichier status"+bool+p+" écrit avec succès")
						res.end("fichier status"+bool+p+" écrit avec succès")
					})
				else res.end(data)
			}
		})
	}
}
exports.add_comment=(req,res)=>{
	let _id="_id",tmp={oc:"charite",s:"solidarite",as:"actionsocial"},tmp_,i=new Date(),table=tmp[req.params.table]||req.params.table,id=req.params.id,user_id=req.params.user_id,comment=req.params.comment
	i=+i
	if(table=="discussions"||table=="discussions_")_id="id_d"
	// console.log(table)
	// console.log(id)
	// console.log(user_id)
	// console.log(comment)
	let sql=`SELECT comments FROM ${table} WHERE ${_id}=${id}`
	db.executeSql(sql,(data,err)=>{
		if(err)res.end(sql)
		else{
			// console.log(data[0].comments)
			// console.log(comment)
			// console.log(unescape(comment))
			data=JSON.parse(data[0].comments)
			data[user_id+"_"+i]=unescape(comment).replace('\n','<br>')
			data=JSON.stringify(data).replace(/"/g,"\\\"")
			sql=`UPDATE ${table} SET comments="${data}" WHERE ${_id}=${id}`
			db.executeSql(sql,function(data_,err){
				if(err)res.end('0')
				else res.end('1')
			})
		}
	})
}
exports.get_users=(req,res)=>{
	let ids=req.params.ids,type=req.params.type,select=""
	switch(type){
		case"infos":select="user.id,nom,prenom,pseudo,_href,_img_"
		break
		default:break
	}
	let sql=`SELECT ${select} FROM users INNER JOIN user ON (users.id=user.id) WHERE user.id IN (${ids})`
	
	db.executeSql(sql,(data,err)=>{
		// if(err)res.end('0')
		if(err)res.end(sql)
		else res.end(JSON.stringify(data))
	})
}
function acted(user,table,uplet,id,bool=true){
	//uplet=particped||created||shared||liked||published
	let sql="",cpt,tmp=[],d=new Date(),bool_=true
	d=+d
	let id_=id+"_"+d
	sql=`SELECT ${uplet} FROM user WHERE id=${user}`
	db.executeSql(sql,function(data,err){
		if(err)httpMsgs.show500_(res,err,sql+"\nla requete contient une erreur")
		// console.log(id+"__"+typeof id)
		// console.log(sql)
		// console.log(JSON.stringify(data[0]))
		// console.log(typeof data[0])
		// console.log(data[0][uplet])
		// console.log(data[0][uplet][uplet])
		// console.log(typeof data[0][uplet]+"__"+typeof JSON.parse(data[0][uplet])+"\n__"+JSON.parse("{}"))
		// console.log("uplet : "+uplet) 
		// console.log(data[0][uplet])
		cpt=JSON.parse(data[0][uplet])
		// console.log(cpt)
		// console.log(typeof cpt)
		if(!cpt[table])cpt[table]=[]
		cpt[table].forEach(function(i,j){
			let search=i.indexOf("_")
//CONDITION POUR IDENTIFIER LES ROWS QUI NE SONT PAS DATEES....CETTE CONDITION NE DEVRAIT PLUS EXISTER PAR LA SUITE CAR TOUTES LES ENTREES AURONT UN "_"
			if(search==-1)search=i.length
//
			if(i.substring(0,search)!=id)tmp.push(i)
			else{
//EN ARRIVANT ICI, ON DEVRAIT AVOIR bool=false(désinscription)....
//SI bool=false ALORS bool_=false AUSSI
				bool_=false
				console.log("bool="+bool+"...\n...si bool=false, cette ressource est éliminé des entrées...\n...ressource::acted::cpt[j]== i === id, i : "+i+", id : "+id)
			}
		})
		if(bool_)
			cpt[table].push(id_)
		// if(!bool){
		else if(!bool){
			if(bool_)console.log("IL Y A UN PROBLEEEEEME!!!! DANS ressource::acted, alors que bool=false(desinscription), bool_=true(entrée n'existe pas encore)")
			console.log(cpt)
			cpt[table]=tmp
			console.log(cpt)
		}
		// console.log(cpt)
		cpt=JSON.stringify(cpt).replace(/"/g,"\\\"")
		sql=`UPDATE user SET ${uplet}="${cpt}" WHERE id=${user}`
		db.executeSql(sql,function(data_,err){
			if(err)httpMsgs.show500_(res,err,sql+"\nla requete contient une erreur")
			console.log("action '"+uplet+"' ajouté avec succès dans table 'user'")
			if(bool&&(uplet=="liked"||uplet=="shared"))notifying(table,uplet,id)
		})
	})
}
// function notifying(user_directory,table,uplet,id){
function notifying(table,uplet,id,values=false){
	//likes||shares||
	let id_={map:"id_map",groups:"id_group",murs:"id"},ajouteur_={},adds={}
	if(table=="groupes"||table=="map")add=""
	if(values!==false){
//CHAQUE FONCTION QUI APPELLE notifying() DOIT SI NECESSAIRE ENTRER LES NOMS DES UPLETS DE CIRCONSTANCES
//POUR L'IDENTIFIANT ET POUR L'AJOUTEUR
		id_=values.id
		ajouteur_=values.ajouteur
		adds=values.adds
	}
	let id_name=typeof id_[table]!="undefined"?id_[table]:"_id"
	let ajouteur_name=typeof ajouteur_[table]!="undefined"?ajouteur_[table]:"ajouteur"
	let adds_value=typeof adds[table]!="undefined"?adds[table]:",href"
	let sql=`select ${ajouteur_name},_href,users.id as the_id,titre ${adds_value} from ${table} inner join users on (${ajouteur_name}=users.id) where ${table}.${id_name}=${id}`
	
	
	db.executeSql(sql,(data,err)=>{
		if(err)throw err
		let href=typeof data[0].href=="undefined"?data[0].href:"#void"
		let theobj={uplet:uplet,titre:data[0].titre,href:href,user_href:data[0]._href,user_id:data[0].the_id,status:"unseen"}
		let user_directory=__dirname+"/../users/"+theobj.user_id+"_"+theobj.user_href
		let file=fs.readFileSync(user_directory+"/notifs.js","utf8")
		let file_=file.substring(file.indexOf('{'))
		console.log(file_+" "+user_directory)
		file_=JSON.parse(file_)
		if(typeof file_[table+"_"+id]=="undefined")file_[table+"_"+id]=[]
		file_[table+"_"+id].push(theobj)
		file_=JSON.stringify(file_)
		console.log(file_+" "+user_directory)
		fs.writeFileSync(user_directory+"/notifs.js","var notifs="+file_)
	})
}
exports.join=(req,res)=>{
	let object=req.params.object,user=req.params.user,id=req.params.id,bool=JSON.parse(req.params.bool),tmp_=[]
	
	let sql=`SELECT participants,ajouteur FROM ${object} WHERE _id=${id}`
	
	db.executeSql(sql,(data,err)=>{
		if(err)res.end('0')
		let tmp=JSON.parse(data[0].participants)
		let ajouteur=data[0].ajouteur
		
		if(bool)tmp.push(parseInt(user))
		else{ 
			tmp.forEach(function(i,j){
				console.log(i+" "+user+typeof i+typeof user)
				if(i!=user)tmp_.push(i)
				else console.log("ressource::join::tmp[j]== i === user, i : "+i+", user : "+user)
			})
			tmp=tmp_
		}
		tmp=JSON.stringify(tmp).replace(/"/g,"\\\"") 
		sql=`UPDATE ${object} SET participants="${tmp}" WHERE _id=${id}`
		db.executeSql(sql,(data_,err)=>{
			if(err)res.end('00')		
			else{
				if(bool){acted(user,object,"participed",parseInt(id))
					console.log("participed !!!!!!!")
					notifying(object,"participed",id)
				}else acted(user,object,"participed",parseInt(id),bool)
					// console.log("unsigned !!!!!!!")
				res.end('1') 
			}
		})
	})
	
}
exports.likes=(req,res)=>{
	let a,obj={},object=req.params.object,user=req.params.user,type=req.params.type,id=req.params.id,uplet=req.params.uplet||"",_id="_id"
	// console.log(object+"\n"+user+"\n"+type+"\n"+id)
	uplet=uplet==""?"likes":uplet
	_id=object=="_varchar"?"id":_id
	let sql=`SELECT ${uplet} FROM ${object} WHERE ${_id}=${id}`
	console.log(sql+"___"+new Date())
	
	db.executeSql(sql,function(data,err){
		if(err)httpMsgs.show500_(res,err,sql+"\nla requete contient une erreur")
		else{
			// console.log(JSON.stringify(data)+"___"+new Date())
			if(data[0][uplet]==null)data[0][uplet]='{}'
			data=JSON.parse(data[0][uplet])
			data[user]=data[user]==type?null:type
			for(a in data)if(data[a]!=null)obj[a]=data[a]
			obj=JSON.stringify(obj).replace(/"/g,"\\\"")
			let sql=`UPDATE ${object} SET ${uplet}="${obj}" WHERE ${_id}=${id}`
			db.executeSql(sql,function(data_,err){
				if(err)httpMsgs.show500_(res,err,sql+"\nla requete contient une erreur")
				else{
					acted(user,object,"liked",parseInt(id))
					res.end('1') 
				}
			})
		}
	})
}
exports.mult_search=(req,res)=>{
	let pattern=unescape(req.params.s),type=req.params.type,ajouteur=req.params.aj,notin=req.params.notin
	let table=req.params.context
	type=type==2?"1":"0"
	ajouteur=ajouteur==0?"=2":"!=2"
	// let tables={"":"livres","":"images","":"musics","":"films"},table=tables[req.params.context]
	let sql=`SELECT * FROM ${table} WHERE (titre LIKE "%${pattern}%" OR title LIKE "%${pattern}%") AND type=${type} AND ajouteur ${ajouteur} AND _id NOT IN (${notin})`
	
	console.log(notin)
	console.log(sql)
	db.executeSql(sql,(data,err)=>{
		if(err)throw err
		else	res.end(JSON.stringify(data))
	})
}
exports.put_logos=(req,res)=>{
	let t,h,sql,sql_="",type=req.params.type,d=new Date(),m=(d.getMonth()+1).toString(),d_=d.getDate().toString(),q={},u,l,arr=[],arr_=[],obj={"fr":'\"\"',"en":'\"\"',"es":'\"\"',"de":'\"\"',"cn":'\"\"',"jp":'\"\"',"ar":'\"\"'}
	d=+d
	if(d_.length==1)d_="0"+d_
	if(m.length==1)m="0"+m
	d_=d_+m
	u=req.body.user
	l=req.body.langue
	// q[u+'_'+d]={langue:l,q:req.body.question,r:[]}
	// q=JSON.stringify(q).replace(/"/g,"\\\"")
	t=req.body.titre
	h=req.body.homelie
	// console.log(d)
	// console.log(q)
	// console.log(h)
	
	if(type=="homelie"){
		obj[l]='\"'+t+'\"'
		for(a in obj)arr.push(obj[a])
		arr=arr.toString()
		obj[l]='\"'+h+'\"'
		for(a in obj)arr_.push(obj[a])
		arr_=arr_.toString()
		// sql='INSERT _varchar(`username`,`'+req.body.langue+'`) VALUES("logos_h_'+d_+'_'+d+'","{\\"share\\":[],\\"amen\\":[],\\"hosanna\\":[],\\"alleluia\\":[]}","'+req.body.titre+'") GO INSERT _text_(`username`,`opt`,`'+req.body.langue+'`) VALUES("logos_h_'+d_+'_'+d+'","'+u+'","'+h+'")'
		// sql='INSERT _varchar(`username`,`opt`,`fr`,`en`,`es`,`de`,`cn`,`jp`,`ar`) VALUES("logos_h_'+d_+'_'+d+'","{\\"share\\":[],\\"amen\\":[],\\"hosanna\\":[],\\"alleluia\\":[]}",'+arr+')'
		sql='INSERT _varchar(`username`,`opt`,`fr`,`en`,`es`,`de`,`cn`,`jp`,`ar`) VALUES("logos_h_'+d_+'_'+d+'","{}",'+arr+')'
		sql_='INSERT _text_(`username`,`opt`,`fr`,`en`,`es`,`de`,`cn`,`jp`,`ar`) VALUES("logos_h_'+d_+'_'+d+'","'+u+'",'+arr_+')'
	}else{
		sql="SELECT `"+l+"` from _text where opt='"+d_+"'"
	}
	
	console.log(sql)
	console.log(sql_)
	
	db.executeSql(sql,(data,err)=>{
		if(err)res.end('0'+err.message)
		else{
			if(type=="question"){
				data=JSON.parse(data[0][l])
				data[u+'_'+d]={langue:l,q:req.body.question,r:[]}
				data=JSON.stringify(data).replace(/"/g,"\\\"")
				sql_='UPDATE _text set `'+l+'`="'+data+'" where opt="'+d_+'"'
				console.log(sql_)
			}
			if(type=="reponse"){
				data=JSON.parse(data[0][l])
				console.log(data[req.body.id])
				data[req.body.id].r.push(req.body.rep)
				data=JSON.stringify(data).replace(/"/g,"\\\"")
				sql_='UPDATE _text set `'+l+'`="'+data+'" where opt="'+d_+'"'
				console.log(sql_)
			}
			db.executeSql(sql_,(data_,err)=>{
				if(err)res.end('0_'+err.message)
				else res.redirect(req.body.redirect)
			})
		}
	})
}
exports.logos_=(req,res)=>{
	if(req.body.text_1){
		// console.log('ok')
		let obj={"fr":'\"\"',"en":'\"\"',"es":'\"\"',"de":'\"\"',"cn":'\"\"',"jp":'\"\"',"ar":'\"\"'},a,arr=[],arr_=[],arr__=[],d=new Date()
		d=+d
		obj[req.body.langue]='\"<h4>'+req.body.t1+'</h4><p>'+req.body.text_1+'</p>\"'
		for(a in obj)arr.push(obj[a])
		arr=arr.toString()
		obj[req.body.langue]='\"<h4>'+req.body.t2+'</h4><p>'+req.body.text_2+'</p>\"'
		for(a in obj)arr_.push(obj[a])
		arr_=arr_.toString()
		obj[req.body.langue]='\"<h4>'+req.body.tcomp+'</h4><p>'+req.body.text_comp+'</p>\"'
		for(a in obj)arr__.push(obj[a])
		arr__=arr__.toString()
		let sql="INSERT _text_(`username`,`opt`,`fr`,`en`,`es`,`de`,`cn`,`jp`,`ar`) values(\"logos_1_"+req.body.date+"\",\""+req.body.date+"\","+arr+");"
		let sql_="INSERT _text_(`username`,`opt`,`fr`,`en`,`es`,`de`,`cn`,`jp`,`ar`) values(\"logos_2_"+req.body.date+"\",\""+req.body.date+"\","+arr_+");"
		let sql__="INSERT _text_(`username`,`opt`,`fr`,`en`,`es`,`de`,`cn`,`jp`,`ar`) values(\"logos_3_"+req.body.date+"\",\""+req.body.date+"\","+arr__+");"
		// let _sql="INSERT _text_(`username`,`opt`,`fr`,`en`,`es`,`de`,`cn`,`jp`,`ar`) values(\"logos_h_"+req.body.date+"_"+d"\",\""+req.body.date+"\",\"[]\",\"[]\",\"[]\",\"[]\",\"[]\",\"[]\",\"[]\");"
		let _sql="INSERT _text(`username`,`opt`,`fr`,`en`,`es`,`de`,`cn`,`jp`,`ar`) values(\"logos_q_"+req.body.date+"\",\""+req.body.date+"\",\"{}\",\"{}\",\"{}\",\"{}\",\"{}\",\"{}\",\"{}\");"
		// console.log(sql)
		db.executeSql(sql,(data,err)=>{
			if(err)httpMsgs.show500_(res,err,sql+"\nla requete contient une erreur")
			else 
				db.executeSql(sql_,(data,err)=>{
					if(err)httpMsgs.show500_(res,err,sql+"\nla requete contient une erreur")
					else 
						db.executeSql(sql__,(data,err)=>{
							if(err)httpMsgs.show500_(res,err,sql+"\nla requete contient une erreur")
							else 
								db.executeSql(_sql,(data,err)=>{
									if(err)httpMsgs.show500_(res,err,sql+"\nla requete contient une erreur")
									else res.redirect('/set_logos')
								})
						})
				})
		})
	}else res.render("logos")
}
exports.logos=(req,res)=>{
	let data,data_,data__,tmp,tab=[],param=req.params||{},date=param.date||"",langue=param.langue||""
	
	if(date!=""){
		console.log('aaaaaaaaaaaaaa')
		if(date==""||langue==""){console.log("la date ou la langue manque dans le GET");res.end("0");return}
		// let sql=`select ${langue},username as u_text_ from _text_ where username regexp "logos_[123h]" and opt="${date}"`
		// let sql_=`select _text_.${langue} as homelie,_varchar.${langue} as titre_h,_text_.opt as user,_varchar.opt as likes from _text_ inner join _varchar on(_text_.username=_varchar.username) where _text_.username like "logos_h%" and _text_.username like "%${date}%"`
		// let sql__=`select ${langue} as questions from _text where opt="${date}"`
		let sql=`select ${langue} as texte,username from _text_ where username regexp "logos_[123h]" and opt="${date}"`
		let sql_="select `_varchar`.`opt` AS `likes`,`_text_`.`id` AS `t_id`,`users`.`_href` AS `_href`,`users`.`nom` AS `nom`,`users`.`prenom` AS `prenom`,`users`.`pseudo` AS `pseudo`,`user`.`_img` AS `_img`,`user`.`_titre` AS `_titre`,`_text_`.`username`,`_text_`.`"+langue+"` AS `texte`,`_varchar`.`username` AS `v_username`,`_varchar`.`"+langue+"` AS `titre` from (((`_text_` join `_varchar` on((`_text_`.`username` = `_varchar`.`username`))) join `user` on((`_text_`.`opt` = `user`.`id`))) join `users` on((`user`.`id` = `users`.`id`))) where (`_text_`.`username` like 'logos_h%"+date+"%')"
		let sql__="select `_text`.`username`,`_text`.`"+langue+"` AS `texte` from `_text` where (`_text`.`opt` = '"+date+"')"
		db.executeSql(sql,(data,err)=>{
			if(err)console.log("0"+sql)
			else 
				db.executeSql(sql_,(data_,err)=>{
					if(err)console.log("1"+sql)
					else
						db.executeSql(sql__,(data__,err)=>{
							tab.push(data)
							tab.push(data_)
							tab.push(data__[0])
							if(err)console.log("2"+sql)
							else res.end(JSON.stringify(tab))
						})
				})
		})
	}else{
		console.log('bbbbbbbbbbbbbbbb')
		let langue="fr"//charger un parametre langue ici
		let sql="select u_text_ as username,"+langue+" as texte from parole"
		let sql_="select id,likes,_href,nom,prenom,pseudo,_img,_titre,t_id,t_username as username,t_"+langue+" as texte,v_"+langue+" as titre from homelies"
		let sql__="select username,"+langue+" as texte from questions"
		let tab=[]
		db.executeSql(sql,(data,err)=>{
			// console.log(JSON.stringify(data))
			// if(err)res.end('"'+sql+'"')
			tab.push(data)
			if(err)res.end('0')
			else 
				db.executeSql(sql_,(data_,err)=>{
					tab.push(data_)
					// data.push(data_)
					// console.log(JSON.stringify(data))
					if(err)res.end('0')
					else 
						db.executeSql(sql__,(data__,err)=>{
							tab.push(data__[0]||{})
							// data.push(data__[0]||{})
							// console.log(JSON.stringify(data))
							if(err)res.end('0')
							else res.end(JSON.stringify(tab))
						})
				})
		})
	}
}
exports.write_file=(req,res)=>{
	// console.log(req.params);
	// console.log(req.params.requete+" xxx "+req.params.type);
	let requete=requete_=req.params.requete,type="",sql="",where="ajouteur=2",bool=true,ids=req.params.ids,theme=req.params.theme,zone=req.params.zone
	
	if(requete_.indexOf('_')!=-1){
		requete_=requete_.replace('_','')
		where="ajouteur!=2"
	}
	if(typeof ids!=="undefined")
		if(typeof theme=="undefined"||typeof zone=="undefined"){res.end('erreur');return false}
		else{
			where+=" AND _id NOT IN ("+ids+")"
			where+=" AND theme_='"+theme+"'"
			if(zone.substring(0,1)=="#")where+=" AND type_='"+zone.substring(1)+"'"
			else where+=" AND zone_='"+zone+"'"
			bool=false
		}
	switch(requete_){
		case"livres":type="type=0 AND "
		break
		case"prieres":type="type=1 AND ";requete_="livres"
		break
		case"images":
		break
		case"musics":type="type=0 AND "
		break
		case"chants":type="type=1 AND ";requete_="musics"
		break
		case"films":type="type=0 AND "
		break
		case"enseignements":type="type=1 AND ";requete_="films"
		break
		default:res.end(requete+" n'est pas une valeur accepté :(")
		break
	}
	
	sql+="SELECT * FROM "+requete_+" INNER JOIN users ON(ajouteur=users.id) INNER JOIN user ON(users.id=user.id) WHERE "+type+where+" LIMIT 10;"
	
	console.log(bool+sql+JSON.stringify(req.params))
	db.executeSql(sql,function(data,err){
		if(err)if(bool)throw err;else httpMsgs.show500_(res,err,sql+"\nla requete contient une erreur")
		else if(bool){
			data=JSON.stringify(data)
			// console.log(data)
			fs.writeFile("./files/"+requete+".js",data,(err)=>{
				if(err)throw err
				res.end('le fichier "'+requete+'" a bien été actualisé')
			})
		}
		else res.end(JSON.stringify(data))
	})
	
	// fs.writeFile("txt.txt",sql,(err)=>{
		// if(err)throw err
		// res.end('le fichier "'+requete+'" a bien été actualisé')
	// })
}
exports.user_account=(req,res)=>{
	let add_all_page="",obj={connected:req.session.connected};
	if(!session.dataStored.all)add_all_page+="'all','_all'"
	sql="select * from users inner join user on users.id=user.id where _href='"+req.params['user_href']+"';"
	console.log(sql)
	db.executeSql(sql,(data,err)=>{
		if(err)httpMsgs.show500(res,err,"la page foi n'a pas pu etre affichée")
		else{
			obj.user=data[0]
			// console.log("obj.user : "+JSON.stringify(obj.user))
			// console.log("obj.user.img_ : "+obj.user.img_)
			// console.log("obj.user.img : "+obj.user.img)
			sql="select * from pages where username IN("+add_all_page+")"
			db.executeSql(sql,(data_,err)=>{
				if(err)httpMsgs.show500(res,err,"la page foi n'a pas pu etre affichée")
				else
					parse_table_pages(data_,obj,res,"user")
			})
		}
	})
}
exports.type_1=(req,res)=>{
}
exports.type_2=(req,res)=>{
	let table=req.params.type,_tmp=tmp=tmp_=tmp__=""
	// console.log(req.params)
	// console.log(type)
	// console.log(tmp[type])
	// if(typeof tmp[type]!="undefined")type=tmp[type]
	// else 
	if(table=="cp"){
		// _tmp=",user.id as user_id";
		tmp="ORDER BY debut ASC";
		tmp_='LEFT JOIN _text_ ON(cp.priere LIKE concat("%",_text_.username,"%"))';
		tmp__="WHERE (_text_.opt LIKE 'priere%' || _text_.opt IS null)"
	}
	// console.log(type)
	let sql=`SELECT *${_tmp} FROM ${table} ${tmp_} INNER JOIN users ON(ajouteur=users.id) INNER JOIN user ON(user.id=users.id) ${tmp__} ${tmp}`
	console.log(sql)
	db.executeSql(sql,(data,err)=>{
		if(err)httpMsgs.show500(res,err,sql+"\n\nvotre requete n'a pas fonctionné... dslé :(")
		res.end(JSON.stringify(data))
	})
}
exports.aumone=(req,res)=>{
	let reqBody=req.body
			console.log("un")
	
	// if(reqBody.don=="bourse"){
		let sql='SELECT donateurs,collecte FROM bourses WHERE i_d="'+reqBody.id_bourse+'"',donateur,collecte,opt,i=new Date()
		i=+i
		if(reqBody.montant_&&reqBody.montant_!=""){
			reqBody.montant=reqBody.montant_
			opt="mensuel"
		}else opt="unique"
		db.executeSql(sql,(data,err)=>{
			if(err)httpMsgs.show500(res,err,sql+"\n\nvos fichiers n'ont pas pu être enregistrer sur nos serveurs... dslé :(")
			donateur=JSON.parse(data[0].donateurs)
			donateur[reqBody.user+"_"+i]=reqBody.montant+"euros : "+opt
			donateur=JSON.stringify(donateur).replace(/"/g,"\\\"")
			collecte=parseInt(data[0].collecte)+parseInt(reqBody.montant)
			console.log(donateur)
			sql='UPDATE bourses SET `donateurs`="'+donateur+'",`collecte`='+collecte+' WHERE i_d="'+reqBody.id_bourse+'"'
			db.executeSql(sql,(data_,err)=>{
				if(err)httpMsgs.show500(res,err,sql+"\n\nvos fichiers n'ont pas pu être enregistrer sur nos serveurs... dslé :(")
				res.redirect(reqBody.redirect)
			})
		})
	// }else{
		// let sql="SELECT donateurs FROM bourses WHERE i_d=webmaster"
		
	// }
	
}
exports.signup_benevolat=(req,res,reqBody)=>{
	let sql="SELECT responses FROM benevolat WHERE _id="+reqBody.id,tab=[],data_
	
	db.executeSql(sql,(data,err)=>{
		if(err)console.log("erreur ressource::signup_benevolat()")
		else{
			data=JSON.parse(data[0].responses)
			uploadfiles(req,"/files/charite/benevolat",reqBody.cvs).then(function(array_files){
				data[reqBody.ajouteur]=array_files
				// console.log(data)
				// console.log("\n\n")
				data_=JSON.stringify(data)
				// console.log(data_)
				data_=JSON.stringify(data).replace(/"/g,"\\\"")
				// console.log(data_)
				sql='UPDATE benevolat SET `responses`="'+data_+'" WHERE _id='+reqBody.id
				// console.log(sql)
				// return
				db.executeSql(sql,(data_,err)=>{
					if(err)httpMsgs.show500(res,err,sql+"\n\nvos fichiers n'ont pas pu être enregistrer sur nos serveurs... dslé :(")
					else{
						acted(reqBody.ajouteur,"benevolat","participed",parseInt(reqBody.id))
						res.redirect(reqBody.redirect)
					} 
				})
			})
		}
	})
}
function create_murs_files(req,time){
	let a,i,j,sql="",ids=[],ids_=[],dir="",_sql=[],__sql=[],tab=[]
	
	time=new Date(time).toLocaleDateString()
	
	dir=__dirname+"/../murs/by.js"
	let _murs=JSON.parse(fs.readFileSync(dir,"utf8"))
	dir=__dirname+"/../murs/by_mur.js"
	let mur_murs=JSON.parse(fs.readFileSync(dir,"utf8"))
	dir=__dirname+"/../murs/by_user.js"
	let user_murs=JSON.parse(fs.readFileSync(dir,"utf8"))
	dir=__dirname+"/../murs/by_id.js"
	let id_murs=JSON.parse(fs.readFileSync(dir,"utf8"))
	dir=__dirname+"/../murs/by_date.js"
	let date_murs=JSON.parse(fs.readFileSync(dir,"utf8"))
	dir=__dirname+"/../murs/by_country.js"
	let _pays_murs=JSON.parse(fs.readFileSync(dir,"utf8"))
	dir=__dirname+"/../murs/by_countrysmall.js"//5
	let pays_murs=JSON.parse(fs.readFileSync(dir,"utf8"))
	dir=__dirname+"/../murs/by_countrymedium.js"//25
	let pays_murs_=JSON.parse(fs.readFileSync(dir,"utf8"))
	dir=__dirname+"/../murs/by_countryhight.js"//100
	let pays_murs__=JSON.parse(fs.readFileSync(dir,"utf8"))
	dir=__dirname+"/../murs/whileworld.js"//100
	let world_murs=JSON.parse(fs.readFileSync(dir,"utf8"))
	dir=__dirname+"/../murs/archive.js"
	let archive_murs=JSON.parse(fs.readFileSync(dir,"utf8"))
	
	
	
	//by_country
	//parmi la selection global derniere, requeter les uplets montrants la popularité du post (likes,shares et comments)
	//traiter la popularité des posts pour les insérer dans les différents by_country
	ids=[],ids_=[]
	ids_=fn.arrobjCompkeyval(pays_murs,"id","")
	ids=fn.arrMerge_(ids,ids_)
	// _sql.push(`select shares,likes,comments from murs where id in (${id_murs})`)
	// __sql.push("popularing_1")
	ids_=fn.arrobjCompkeyval(pays_murs_,"id","")
	ids=fn.arrMerge_(ids,ids_)
	// _sql.push(`select shares,likes,comments from murs where id in (${id_murs_})`)
	// __sql.push("popularing_2")
	ids_=fn.arrobjCompkeyval(pays_murs__,"id","")
	ids=fn.arrMerge_(ids,ids_)
	// _sql.push(`select shares,likes,comments from murs where id in (${ids})`)
	// __sql.push("popularing_3")
	ids_=fn.arrobjCompkeyval(world_murs,"id","")
	ids=fn.arrMerge_(ids,ids_)
	// _sql.push(`select shares,likes,comments from murs where id in (${ids})`)
	// __sql.push("popularing_world")
	ids_=fn.objGetkeys(id_murs,"")
	ids=fn.arrMerge_(ids,ids_)
	_sql.push(`select shares,likes,comments from murs where id in (${ids})`)
	__sql.push("popularing")
	// sql=`select shares,likes,comments from murs where id in (${ids})`
	let popularing=function(data){
		data.forEach(function(i){
			let s=fn.objLength(JSON.parse(i.shares))
			let l=fn.objLength(JSON.parse(i.likes))
			let c=fn.objLength(JSON.parse(i.comments))
			let h=Math.round((+new Date()-(+new Date(i.date)))/(1000*60*60))
			i.s=s
			i.l=l
			i.c=c
			i.h=h
			i.t=s+l+c-h
			
			if(i.t!=0){
				tab={}
				for(a in pays_murs){
					j=0,tab[a]=[]
					while(j<5){
						if(typeof pays_murs[a][j]=='undefined')pays_murs[a][j]={t:0}
						if(pays_murs[a][j].t<i.t)tab[a].push(i)
						else tab[a].push(pays_murs[j])
						i++
					}pays_murs=tab
					j=0,tab=[]
					while(j<25){
						if(typeof pays_murs_[a][j]=='undefined')pays_murs_[a][j]={t:0}
						if(pays_murs_[j].t<i.t)tab[a].push(i)
						else tab[a].push(pays_murs_[j])
						i++
					}pays_murs_=tab
					j=0,tab=[]
					while(j<100){
						if(typeof pays_murs__[a][j]=='undefined')pays_murs__[a][j]={t:0}
						if(pays_murs__[a][j].t<i.t)tab[a].push(i)
						else tab[a].push(pays_murs__[a][j])
						i++
					}pays_murs__=tab
				}
				j=0,tab=[]
				while(j<100){
					if(typeof world_murs[j]=='undefined')world_murs[j]={t:0}
					if(world_murs[j].t<i.t)tab.push(i)
					else tab.push(world_murs[j])
					i++
				}world_murs=tab
			}
			writeFileSync(__dirname+"/murs/by_countrysmall.js",pays_murs_)
			writeFileSync(__dirname+"/murs/by_countrymedium.js",pays_murs_)
			writeFileSync(__dirname+"/murs/by_countryhight.js",pays_murs__)
			writeFileSync(__dirname+"/murs/whileworld.js",world_murs)
	// dir=__dirname+"/murs/archive.js"
	// let archive_murs=JSON.parse(fs.readFileSync(dir,"utf8"))
		})
	}
	
	
	
	//all
	//requete tous les posts qui ont été enregistrés depuis cette dernière opération (effectué à la date : time), en commencant par le plus récent
	//avec la réponse, actualise les fichiers by.js,by_mur,by_user,by_id,
	_sql.push(`select * from murs where date>${time} order by date DESC`)
	__sql.push("reload")
	let reload=function(data){
		console.log(_murs)
		_murs=[],date_murs={},id_murs={},user_murs={},mur_murs={foi:[],charite:[],esperance:[]},_pays_murs={}
		data.forEach(function(i){
			_murs.push(i)
			if(typeof date_murs[+new Date(i.date)]=="undefined")date_murs[+new Date(i.date)]=i;else{date_murs[+new Date(i.date)]=[date_murs[+new Date(i.date)]];date_murs[+new Date(i.date)].push(i)}
			id_murs[i.id]=i
			if(typeof user_murs[i.ajouteur]=="undefined")user_murs[i.ajouteur]=[];user_murs[i.ajouteur].push(i)
			mur_murs[i.mur].push(i)
			if(typeof _pays_murs[i.pays]=="undefined")_pays_murs[i.pays]=[];_pays_murs[i.pays].push(i)
		})
		writeFileSync(__dirname+"/murs/by.js",_murs)
		writeFileSync(__dirname+"/murs/by_mur.js",mur_murs)
		writeFileSync(__dirname+"/murs/by_user.js",user_murs)
		writeFileSync(__dirname+"/murs/by_id.js",id_murs)
		writeFileSync(__dirname+"/murs/by_date.js",date_murs)
		writeFileSync(__dirname+"/murs/by_country.js",_pays_murs)
	}
	
	db.transaction(_sql,function(data,err){
		if(err)throw err
		else{
			let now=+new Date()
			writeFileSync(__dirname+"/murs/_.js",now)
			for(a in data)eval("a(data[a])")
		}
	},__sql)
	console.log("_____________create_murs_files is over______________")
}
exports.check_murs_files=(req)=>{
	let dir
	
	dir=__dirname+"/../murs/_.js"
	console.log(dir)
	let now=+new Date()
	let time=fs.readFileSync(dir,"utf8")
	console.log(time)
	if((time+1000*60*5)<now)create_murs_files(req,time)
	// dir=__dirname+"/users/"+req.username+"_"+req.username_._href+"/_murs.js"
	// console.log(dir)
	// time=fs.readFileSync(dir,"utf8")
	// console.log(time)
	// if((time+1000*60*5)<now)create_murs_files(req,time)
	
}
exports.murs=(req,res,reqBody)=>{
	///////////////////////////
	///////////////////////////
	//IL FAUT TROUVER UNE SOLUTION PARCEQUE CES DONNEES DE REDIRECTION DNE SONT PAS EFFECTIVE POUR OUTES LES LANGUES
	///////////////////////////
	let sql="",redir={"foi":"/jesus-christ-foi-chretienne","charite":"/vierge-marie-charite-chretienne","esperance":"/dieu-le-pere-esperance-chretienne"}
	///////////////////////////
	///////////////////////////
	if(!reqBody.titre)reqBody.titre=""
	if(!reqBody.texte)reqBody.texte=""
	else reqBody.texte=reqBody.texte.replace(/"/gm,"&quotes;").replace("\r\n","")
	if(reqBody.mult&&reqBody.mult==""){
		if(reqBody.mult_&&reqBody.mult_!="")reqBody.mult=reqBody.mult_
	}else if(reqBody.mult&&reqBody.mult!="")reqBody.mult="tmp9/"+reqBody.mult 
	else reqBody.mult=""
	
	sql+="INSERT INTO murs(`langue`,`mur`,`type`,`href`,`titre`,`texte`,`mult`,`shares`,`likes`,`comments`,`ajouteur`)"
	sql+=' VALUES("'+reqBody.langue+'","'+reqBody.mur+'","'+reqBody.type+'","'+reqBody.href+'","'+reqBody.titre+'","'+reqBody.texte+'","'+reqBody.mult+'","{}","{}","{}",'+reqBody.ajouteur+');'
	db.executeSql(sql,(data,err)=>{
		console.log('un')
		if(err)httpMsgs.show500(res,err,sql+"\n\nvotre "+reqBody.type+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
		else
			db.executeSql("SELECT max(id) AS max FROM murs",(data_,err)=>{
			console.log('deux')
				if(err)httpMsgs.show500(res,err,sql+"\n\nvotre "+reqBody.type+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
				else
					db.executeSql("SELECT published FROM user WHERE id="+reqBody.ajouteur,(data__,err)=>{
						console.log('trois')
						if(err)httpMsgs.show500(res,err,sql+"\n\nvotre "+reqBody.type+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
						else{
							acted(reqBody.ajouteur,reqBody.mur+"-"+reqBody.type,"published",parseInt(data_[0].max))
							res.redirect(reqBody.redir) 
					
							// console.log(data__[0].published)
							// let i=0,tmp=JSON.parse(data__[0].published)
							// while(typeof tmp[reqBody.mur+"-"+reqBody.type+"-"+i]!="undefined")i++
							// tmp[reqBody.mur+"-"+reqBody.type+"-"+i]=data_[0].max
							// tmp=JSON.stringify(tmp).replace(/"/g,"\\\"")
							// console.log(tmp)
							// sql_='UPDATE user SET `published`="'+tmp+'" WHERE id='+reqBody.ajouteur
							// db.executeSql(sql_,(_data,err)=>{
								// console.log('quatre')
								// if(err)httpMsgs.show500(res,err,sql_+"\n\nvotre "+reqBody.type+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
								// else res.redirect(reqBody.redir) 
							// })
						}
					})
			}) 
	})
}
// <form action="/teste_formidable" method="POST" enctype="multipart/form-data">
		// <input name="okk" >
		// <input type="file" name="ok" multiple>
			// <button>ok</button>
	// </form>
function uploadfiles__(req,url,cond=""){
	let form = new m.Form(),filee=[],d=new Date(),img=+d,newpath,imgs=[]
    form.on("error", function (err) {
		console.log('error : '+err)
	}).on("part", function (part) {
		console.log("part")
		console.log(JSON.stringify(part))
		part.on("error", function (err) {
			console.log('error2 : '+err)
		})
	}).on("file", function (name, file) {
		if(name==cond){
			// console.log("file"+req.url)
			filee.push({name:file})
			let oldpath = file.path;
			// img=+d+"_"+files.filetoupload.name
			img="imgs/"+url+"/"+img+"_"+file.originalFilename.toLowerCase()
			newpath ='c:/wamp/www/work/nodejs/projects/1/public/'+img
			fs.rename(oldpath, newpath, function (err) {
				if (err){
					console.log('error occured while writing : '+newpath)
					imgs.push('imgs/error.png')
				}
				console.lof('file '+name+' wrote at : '+newpath)
				imgs.push(img)
				img=+d
			});
		  // var oldpath = files.ok.path;
		  // var newpath = 'C:/data/' + files.ok.name;
		  // fs.rename(oldpath, newpath, function (err) {
			// if (err) throw err;
			// res.write('File uploaded and moved!');
			// res.end();
		  // });
		}
	}).on("close", function (field, value) {
		console.log("multiparty middleware closed")
		return imgs
		// console.log(JSON.stringify(filee))
		// res.end()
	})
	form.parse(req)
}
//FONCTION NON TESTEE
//MAIS SENSE ETRE PAREIL A uploadfiles()
function uploadfiles_(req,url,cond=""){
	filee=[],d=new Date(),img=+d,newpath,imgs=[]
	return new Promise(
		function(resolve,reject){
			// console.log('____'+JSON.stringify(files))
			if(files[cond])
				files[cond].forEach(function(obj){
					let oldpath = obj.path;
					// img='c:/wamp/www/work/nodejs/projects/1/public/'+img+"_"+files.originalFilename.toLowerCase()
					img="/data/"+obj.originalFilename.toLowerCase()
					let newpath = img;
					fs.rename(oldpath, newpath, function (err) {
						// if (err){
							// return "error.png"
							// img=+d
						// }
						// img=+d
						// return img
						if (err){
							imgs.push('imgs/error.png')
							console.log('erreur fichier')
						}
						imgs.push(img)
						console.log('fichier enregistré')
					})
				})
			return imgs
		}
	)
}
function uploadfiles(req,url,files,add=""){
	let d=new Date(),newpath,imgs=[],error='imgs/error.png'
	d=+d
	if(url.substr(0,1)!="/")console.log("petite erreur...la variable uploadfiles::url ne commence pas par '/'")
	// console.log(JSON.stringify(files))
	return new Promise(
		function(resolve,reject){
			files.forEach(function(file){
				let img=url+"/"+d+"_"+file.originalFilename.toLowerCase()
				let oldpath = file.path;
				let newpath ='c:/wamp/www/work/nodejs/projects/1/public'+img
				fs.rename(oldpath, newpath, function (err) {
					if (err){
						console.log('une erreur est apparue en écrivant le fichier : '+newpath)
						imgs.push(error)//NE SERT A RIEN A CAUSE DE L'ASYNCHRONE...ECRIT APRES LA REPONSE
						return false
					}
					console.log('fichier '+file.originalFilename+' écrit à : '+newpath) 
				})
				imgs.push(img)
			})
			resolve(imgs)
		}
	)
}
function uploadfile_(req,url,cond=""){
	return new Promise(
		function(resolve,reject){
			let form = new f.IncomingForm(),d=new Date(),img=+d
			form.parse(req, function (err, fields, files) {
				// console.log(JSON.stringify(files))
				
				// img=img+'_'+files.ok.name
				// let oldpath = files.ok.path
				// let newpath = '/data/'+img
				img="imgs/"+url+"/"+img+"_"+files[cond].name.toLowerCase()
				let oldpath = files[cond].path
				let newpath = 'C:/wamp/www/work/nodejs/projects/1/public/'+img
				fs.rename(oldpath, newpath, function (err) {
					// if (err) throw err;
					// res.write('File uploaded and moved!');
					// res.end();
					if (err) reject("imgs/"+url+"/error.png")
					return resolve(img)
				})
			})
		}
	)
}
function uploadfile(req,url,file,add=""){
	let d=new Date(),img=+d,error=url+"/error.png"
	if(url.substr(0,1)!="/")console.log("petite erreur...la variable uploadfiles::url ne commence pas par '/'")
	return new Promise(
		function(resolve,reject){
			img=url+"/"+add+img+"_"+file.originalFilename.toLowerCase()
			let oldpath=file.path
			let newpath = 'C:/wamp/www/work/nodejs/projects/1/public'+img
			fs.rename(oldpath, newpath, function (err) {
				// if (err) throw err;
				// res.write('File uploaded and moved!');
				// res.end();
				if (err){
					//CETTE INSTRUCTION NE PEUT PAS FONCTIONNER DU A L'ASYNC
					// img=error;
					console.log('error occured while writing : '+newpath)
					return false
				}
				console.log('fichier '+file.originalFilename+' écrit à : '+newpath) 
			})
			return resolve(img)
		}
	)
}
exports.insert_livres=(req,res,reqBody)=>{
	let sql="",img="",imgs="",tmp
	
	if(reqBody.type==0)var a="livre"
	else var a="prière"
	if(reqBody.ajouteur=="")reqBody.ajouteur=2
	
	console.log("___"+img+"___")
	
	// uploadfiles(req,"/files/foi/livres",reqBody.files,reqBody.langue+"_").then(function(array_files){
		// tmp=JSON.parse(reqBody.links.replace(/\\/g,""))
		// tmp.files=array_files
		// reqBody.links=JSON.stringify(tmp).replace(/"/g,"\\\"")
		uploadfiles(req,"/imgs/foi/livres/"+reqBody.langue,reqBody.imgs).then(function(array_imgs){
			imgs=JSON.stringify(array_imgs).replace(/"/g,"\\\"")
			uploadfile(req,"/imgs/foi/livres/"+reqBody.langue,reqBody.img[0]).then(function(img){
				// console.log("___"+img+"___")
				// console.log("___"+imgs+"___")
				sql+="INSERT INTO livres(`langue`,`type`,`href`,`title`,`titre`,`auteur`,`ajouteur`,`img`,`shares`,`likes`,`imgs`,`short_descr`,`descr`,`theme`,`theme_`,`zone`,`zone_`,`isbn`,`infos`,`links`)"
				sql+=' VALUES("'+reqBody.langue+'",'+reqBody.type+',"'+reqBody.href+'","'+reqBody.title+'","'+reqBody.titre+'","{\\"nom\\":\\"'+reqBody.auteur+'\\",\\"lien\\":\\"\\"}",'+reqBody.ajouteur+',"'+img+'","{}","{}","'+imgs+'","'+reqBody.short_descr+'","'+reqBody.descr+'","'+reqBody.theme+'","'+reqBody.theme_+'","'+reqBody.zone+'","'+reqBody.zone_+'","'+reqBody.isbn+'","'+reqBody.infos+'","'+reqBody.links+'");'
				db.executeSql(sql,(data,err)=>{
					if(err)httpMsgs.show500(res,err,sql+"\n\nvotre "+a+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
					else{
						db.executeSql("SELECT max(_id) AS max FROM livres",(data_,err)=>{
							console.log("request on data table 'livres', data_[0].max = "+data_[0].max)
							acted(reqBody.ajouteur,"livres","created",parseInt(data_[0].max))
						})
						// if(reqBody.ajouteur!=2) 
						res.redirect(req.url)
					} 
				})
			})
		})
	// })
}
exports.insert_images=(req,res,reqBody)=>{
	let sql="",imgs=""
	 
	var a="image"
	if(reqBody.ajouteur=="")reqBody.ajouteur=2
	
	
	uploadfiles(req,"/files/foi/images",reqBody.files,reqBody.langue+"_").then(function(array_files){
		tmp=JSON.parse(reqBody.links.replace(/\\/g,""))
		tmp.files=array_files
		reqBody.links=JSON.stringify(tmp).replace(/"/g,"\\\"")
		uploadfile(req,"/imgs/foi/images",reqBody.img[0]).then(function(img){
			sql+="INSERT INTO images(`href`,`title`,`titre`,`auteur`,`ajouteur`,`img`,`shares`,`likes`,`short_descr`,`descr`,`theme`,`theme_`,`type`,`type_`,`infos`,`links`)"
			sql+=' VALUES("'+reqBody.href+'","'+reqBody.title+'","'+reqBody.titre+'","{\\"nom\\":\\"'+reqBody.auteur+'\\",\\"lien\\":\\"\\"}",'+reqBody.ajouteur+',"'+img+'","{}","{}","'+reqBody.short_descr+'","'+reqBody.descr+'","'+reqBody.theme+'","'+reqBody.theme_+'","'+reqBody.type+'","'+reqBody.type_+'","'+reqBody.infos+'","'+reqBody.links+'");'
			db.executeSql(sql,(data,err)=>{
				if(err)httpMsgs.show500(res,err,sql+"\n\nvotre "+a+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
				else{
					db.executeSql("SELECT max(_id) AS max FROM images",(data_,err)=>{
						console.log("request on data table 'images', data_[0].max = "+data_[0].max)
						acted(reqBody.ajouteur,"images","created",parseInt(data_[0].max))
					})
					res.redirect(req.url)
				}
			})
		})
	})
	
	
}
exports.insert_musics=(req,res,reqBody)=>{
	let sql="",imgs=""
	
	//POUR ARTISTES
	if(reqBody.titre_===undefined)reqBody.titre_=""
	//POUR MUSIQUES
	if(reqBody.auteur===undefined)reqBody.auteur=""
	else reqBody.auteur='{\\"nom\\":\\"'+reqBody.auteur+'\\",\\"lien\\":\\"\\"}'
	if(reqBody.type==0)var a="artiste"
	else var a="musique"
	if(reqBody.ajouteur=="")reqBody.ajouteur=2
	
	uploadfiles(req,"/files/foi/musics",reqBody.files,reqBody.langue+"_").then(function(array_files){
		tmp=JSON.parse(reqBody.links.replace(/\\/g,""))
		tmp.files=array_files
		reqBody.links=JSON.stringify(tmp).replace(/"/g,"\\\"")
		uploadfiles(req,"/imgs/foi/musics/"+reqBody.langue,reqBody.imgs).then(function(array_imgs){
			imgs=JSON.stringify(array_imgs).replace(/"/g,"\\\"")
			uploadfile(req,"/imgs/foi/musics/"+reqBody.langue,reqBody.img[0]).then(function(img){
				sql+="INSERT INTO musics(`type`,`href`,`titre`,`titre_`,`auteur`,`ajouteur`,`img`,`shares`,`likes`,`imgs`,`short_descr`,`descr`,`theme`,`theme_`,`zone`,`zone_`,`langue`,`infos`,`links`)"
				sql+=' VALUES("'+reqBody.type+'","'+reqBody.href+'","'+reqBody.titre+'","'+reqBody.titre_+'","'+reqBody.auteur+'",'+reqBody.ajouteur+',"'+img+'","{}","{}","'+imgs+'","'+reqBody.short_descr+'","'+reqBody.descr+'","'+reqBody.style+'","'+reqBody.style_+'","'+reqBody.zone+'","'+reqBody.zone_+'","'+reqBody.langue+'","'+reqBody.infos+'","'+reqBody.links+'");'
				db.executeSql(sql,(data,err)=>{
					if(err)httpMsgs.show500(res,err,sql+"\n\nvotre "+a+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
					else{
						db.executeSql("SELECT max(_id) AS max FROM musics",(data_,err)=>{
							console.log("request on data table 'musics', data_[0].max = "+data_[0].max)
							acted(reqBody.ajouteur,"musics","created",parseInt(data_[0].max))
						})
						res.redirect(req.url)
					}
				})
			})
		})
	})
}
exports.insert_films=(req,res,reqBody)=>{
	let sql="",imgs=""
	
	if(reqBody.type==0)var a="film"
	else var a="enseignement"
	if(reqBody.langue_===undefined)reqBody.langue_="__"
	if(reqBody.ajouteur=="")reqBody.ajouteur=2
	
	uploadfile(req,"/imgs/foi/films/"+reqBody.langue,reqBody.img[0]).then(function(img){
		sql+="INSERT INTO films(`langue`,`type`,`href`,`title`,`titre`,`auteur`,`ajouteur`,`img`,`shares`,`likes`,`short_descr`,`descr`,`theme`,`theme_`,`langue_`,`date`,`infos`,`links`)"
		sql+=' VALUES("'+reqBody.langue+'",'+reqBody.type+',"'+reqBody.href+'","'+reqBody.title+'","'+reqBody.titre+'","{\\"nom\\":\\"'+reqBody.auteur+'\\",\\"lien\\":\\"\\"}",'+reqBody.ajouteur+',"'+img+'","{}","{}","'+reqBody.short_descr+'","'+reqBody.descr+'","'+reqBody.theme+'","'+reqBody.theme_+'","'+reqBody.langue_+'","'+reqBody.date+'","'+reqBody.infos+'","'+reqBody.links+'");'
		db.executeSql(sql,(data,err)=>{
			if(err)httpMsgs.show500(res,err,sql+"\n\nvotre "+a+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
			else{
				db.executeSql("SELECT max(_id) AS max FROM films",(data_,err)=>{
					console.log("request on data table 'films', data_[0].max = "+data_[0].max)
					acted(reqBody.ajouteur,"films","created",parseInt(data_[0].max))
				})
				res.redirect(req.url)
			}
		})
	})
}
exports.add_priere=(req,res,reqBody)=>{
	let values={"fr":"","en":"","es":"","de":"","cn":"","jp":"","ar":""},tab=[],a,data
	values[req.body.langue]=req.body.priere
	for(a in values)tab.push(values[a])
	tab=JSON.stringify(tab).replace('[','').replace(']','')
	let sql="INSERT _text_(`username`,`opt`,`fr`,`en`,`es`,`de`,`cn`,`jp`,`ar`) VALUES(\""+req.body.titre+"\",\"priere_"+req.body.ajouteur+"\","+tab+")"
	console.log(sql)
	db.executeSql(sql,(data,err)=>{
		console.log(req.body.redirect)
		if(err)httpMsgs.show500(res,err,+"\n\nerreur dans la requte sql :("+sql)
		else res.redirect(req.body.redirect)
	})
}
exports.insert_cp=(req,res,reqBody)=>{
	let sql="",imgs="",a=""
	
	if(reqBody.heure_!=="")reqBody.heure_=JSON.stringify(reqBody.heure_.split(' || '))
	uploadfile(req,"/imgs/foi/cp",reqBody.img[0]).then(function(img){
		sql+="INSERT INTO cp(`langue`,`href`,`ajouteur`,`titre`,`img`,`status`,`participants`,`shares`,`likes`,`short_descr`,`descr`,`priere`,`priere_`,`heure`,`debut`,`fin`,`publications_`,`comments`)"
		sql+=' VALUES("'+reqBody.langue+'","'+reqBody.href+'",'+reqBody.ajouteur+',"'+reqBody.titre+'","'+img+'","'+reqBody.status+'","[]","{}","{}","'+reqBody.short_descr+'","'+reqBody.descr+'","'+reqBody.priere+'","'+reqBody.priere_+'","'+reqBody.heure+'","'+reqBody.debut+'","'+reqBody.fin+'","{}","{}");'
		db.executeSql(sql,(data,err)=>{
			if(err)httpMsgs.show500(res,err,sql+"\n\nvotre "+a+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
			else{
				db.executeSql("SELECT max(_id) AS max FROM cp",(data_,err)=>{
					console.log("request on data table 'cp', data_[0].max = "+data_[0].max)
					acted(reqBody.ajouteur,"cp","created",parseInt(data_[0].max))
				})
				res.redirect(req.url)
			}
		})
	})
}
exports.insert_rc=(req,res)=>{
	let sql="",reqBody=req.body,imgs="",a=""
	
	// if(reqBody.heure_!=="")reqBody.heure_=JSON.stringify(reqBody.heure_.split(' || '))
	sql+="INSERT INTO rc(`langue`,`href`,`ajouteur`,`activite`,`img`,`jour`,`heure`,`nombre`,`participants`,`shares`,`likes`,`pays`,`ville`,`descr`,`lieu`,`comments`)"
	sql+=' VALUES("'+reqBody.langue+'","'+reqBody.href+'",'+reqBody.ajouteur+',"'+reqBody.activite+'","imgs/foi/rc/_'+reqBody.img+'.png","'+reqBody.jour+'","'+reqBody.heure+'","'+reqBody.nombre+'","[]","{}","{}","'+reqBody.pays+'","'+reqBody.ville+'","'+reqBody.descr+'","'+reqBody.lieu+'","{}");'
	db.executeSql(sql,(data,err)=>{
		if(err)httpMsgs.show500(res,err,sql+"\n\nvotre "+a+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
		else{
			db.executeSql("SELECT max(_id) AS max FROM rc",(data_,err)=>{
				console.log("request on data table 'rc', data_[0].max = "+data_[0].max)
				acted(reqBody.ajouteur,"rc","created",parseInt(data_[0].max))
			})
			res.redirect(req.url)
		}
	})
}
exports.insert_oeuvre=(req,res)=>{
	let sql="",reqBody=req.body,imgs="",a="",tmp={oc:"charite",s:"solidarite",as:"actionsocial"}
	// console.log(req.body.requete)
	// console.log(tmp[req.body.requete])
	// if(reqBody.heure_!=="")reqBody.heure_=JSON.stringify(reqBody.heure_.split(' || '))
	if(typeof reqBody.requete=="undefined"){
		if(reqBody.horaires=='')reqBody.horaires=reqBody.horaires_
		sql+="INSERT INTO benevolat(`langue`,`href`,`nom`,`titre`,`img`,`action`,`debut`,`fin`,`pays`,`ville`,`descr`,`nombre`,`responoses`,`ajouteur`,`horaires`)"
		sql+=' VALUES("'+reqBody.langue+'","'+reqBody.href+'","'+reqBody.nom+'","'+reqBody.titre+'","'+reqBody.img+'","'+reqBody.action+'","'+reqBody.debut+'","'+reqBody.fin+'","'+reqBody.pays+'","'+reqBody.ville+'","'+reqBody.descr+'","'+reqBody.nombre+'","{}",'+reqBody.ajouteur+',"'+reqBody.horaires+'");'
		db.executeSql(sql,(data,err)=>{
			db.executeSql("SELECT max(_id) AS max FROM benevolat",(data_,err)=>{
				console.log("request on data table '"+tmp[req.body.requete]+"', data_[0].max = "+data_[0].max)
				acted(reqBody.ajouteur,tmp[req.body.requete],"created",parseInt(data_[0].max))
			})
			res.redirect(req.url)
		})
	}
	else{
		db.executeSql('INSERT INTO bourses(`i_d`,`donateurs`,`collecte`) VALUES("'+reqBody.id_bourse+'","{}",0)',(data_,err)=>{
			if(err)httpMsgs.show500(res,err,'INSERT INTO bourses(`donateurs`,`collecte`) VALUES("{}",0)'+"\n\nvotre "+a+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
			else{
				db.executeSql("SELECT max(id_) AS max FROM bourses",(data__,err)=>{
					console.log("entré charité, max id_ : ")
					console.log(data__) 
					if(err)httpMsgs.show500(res,err,"SELECT max(id_) AS max FROM bourses"+"\n\nvotre "+a+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
					else{
						sql+="INSERT INTO "+tmp[req.body.requete]+"(`langue`,`href`,`titre`,`img`,`action`,`jour`,`heure`,`pays`,`ville`,`lieu`,`descr`,`id_bourse`,`id_bourse_`,`bourse`,`ajouteur`,`participants`,`shares`,`likes`,`comments`)"
						sql+=' VALUES("'+reqBody.langue+'","'+reqBody.href+'","'+reqBody.titre+'","'+reqBody.image+'","'+reqBody.action+'","'+reqBody.jour+'","'+reqBody.heure+'","'+reqBody.pays+'","'+reqBody.ville+'","'+reqBody.lieu+'","'+reqBody.descr+'","'+reqBody.id_bourse+'",'+data__[0].max+',0,'+reqBody.ajouteur+',"[]","{}","{}","{}");'
						db.executeSql(sql,(data,err)=>{
							if(err)httpMsgs.show500(res,err,sql+"\n\nvotre "+a+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
							else{
								db.executeSql("SELECT max(_id) AS max FROM "+tmp[req.body.requete],(data_,err)=>{
									console.log("request on data table '"+tmp[req.body.requete]+"', data_[0].max = "+data_[0].max)
									acted(reqBody.ajouteur,tmp[req.body.requete],"created",parseInt(data_[0].max))
								})
								res.redirect(req.url)
							}
						})
					}
				})
			}
		})
	}
}
exports.insert_esperance=(req,res)=>{
	let sql="",reqBody=req.body,imgs="",a="",tmp
	// console.log(req.body.requete)
	// console.log(tmp[req.body.requete])
	// if(reqBody.heure_!=="")reqBody.heure_=JSON.stringify(reqBody.heure_.split(' || '))
	if(reqBody[reqBody.requete]=="")reqBody[reqBody.requete]=reqBody[reqBody.requete+"_"]
	sql+="INSERT INTO "+reqBody.requete+"(`langue`,`href`,`titre`,`"+reqBody.requete+"`,`descr`,`ajouteur`,`shares`,`likes`,`comments`)"
	sql+=' VALUES("'+reqBody.langue+'","'+reqBody.href+'","'+reqBody.titre+'","'+reqBody[reqBody.requete]+'","'+reqBody.descr+'",'+reqBody.ajouteur+',"{}","{}","{}");'
	
	db.executeSql(sql,(data,err)=>{
		if(err)httpMsgs.show500(res,err,sql+"\n\nvotre "+a+" n'a pas pu être enregistrer sur nos serveurs... dslé :(")
		else{
			db.executeSql("SELECT max(_id) AS max FROM "+reqBody.requete,(data_,err)=>{
				console.log("request on data table '"+reqBody.requete+"', data_[0].max = "+data_[0].max)
				acted(reqBody.ajouteur,reqBody.requete,"created",parseInt(data_[0].max))
			})
			res.redirect(req.url)
		}
	})
}
exports.update=(res,reqBody)=>{
	try{
		if(!reqBody)throw new Error('Input not valid : reqBody doesnt exist')
		// reqBody=reqBody.replace("=",'":"')
		let data=JSON.parse(reqBody)
		// let data=JSON.parse('{"else":"ahgjh"}')
		if(data){
			if(!data.id)throw new Error("id not provided")
			let sql="UPDATE livres SET"
			for(var i in data)
				if(i!="_method_")
					if(typeof data[i]=="string")sql+=" `"+i+'`="'+data[i]+'",'
					else if(typeof data[i]=="number"||typeof data[i]=="integer") sql+=" `"+i+'`='+data[i]+','
					else throw new Error("data type invalid : "+i+" type is "+typeof data[i])
			sql=sql.slice(0,-1)
			sql+=" WHERE id="+data.id+";"
			console.log("requete sql : "+sql)
			db.executeSql(sql,(data,err)=>{
				if(err)httpMsgs.show500(res,err)
				else httpMsgs.sendJson(res,{msg:"Update de l'id '"+data.id+"' réussi"})
			})
		}else throw new Error("Input not valid : invalid 'reqBody' object "+reqBody)
	}catch(ex){
		httpMsgs.show500(res,ex)
	}	
}
exports.delete=(res,reqBody)=>{
				console.log('____delete____')
	try{
		if(!reqBody)throw new Error('Input not valid : reqBody doesnt exist')
		// reqBody=reqBody.replace("=",'":"')
		let data=JSON.parse(reqBody)
		// let data=JSON.parse('{"else":"ahgjh"}')
		if(data){
			if(!data.id)throw new Error("id not provided")
			let sql="DELETE FROM livres WHERE id="+data.id+";"
			console.log("requete sql : "+sql)
			db.executeSql(sql,(data,err)=>{
				if(err)httpMsgs.show500(req,res,err)
				else httpMsgs.show200_responseJson(res,{msg:"Suppression de l'id '"+data.id+"' réussie"})
			})
		}else throw new Error("Input not valid : invalid 'reqBody' object "+reqBody)
	}catch(ex){
		httpMsgs.show500(req,res,ex)
	}
}
exports.other=(res,x,y)=>{
	console.log('method "'+y+'" inconnue')
	httpMsgs.show405(res)
}