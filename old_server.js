let http=require('http')
let express=require('express')
let path=require('path')
let m=require('multiparty')
//-----------------
// const app = express.Router()
let app=express()
//-----------------
let session = require('express-session') 
const passport=require('passport')  
let bodyParser = require('body-parser')   
let cookieParser = require('cookie-parser')   
let router = express.Router(); 
let fs=require('fs')
let rsc=require('../controller/ressource')
let settings=require('../settings')
let fn=require('../fn')
let httpMsgs=require('./httpMsgs')

app.get("/teste",(req,res)=>{rsc.teste(req,res)})
//
//
//
//
//
//
//
//
//
//
const static_roots_array=["/tmp0/","/tmp1/","/files/","/imgs/","/apis/","/js/","/css/","/users/"]
function fn_static_roots_array(e,i,a){if(varcrossscript.indexOf(e)!=-1)return true}
var varcrossscript=""
app.use((req,res,next)=>{
	// console.log(req.url.indexOf())
	varcrossscript=req.url
	let ok=static_roots_array.filter(fn_static_roots_array)
	console.log("!!!!"+__dirname)
	// console.log("!!!!")
	// console.log(ok)
	// console.log("server::middleware : si je ne suis pas une root, je vais etre bloqué ici : "+req.url)
	console.log(req.url+" : "+req.url.indexOf('.')+"vs"+req.url.lastIndexOf('.'))
	// if((req.url.indexOf('.')==-1&&req.url.indexOf('%')==-1)||req.url.indexOf('.')!=req.url.lastIndexOf('.'))next()
	// if(req.url.indexOf('.')==-1||req.url.indexOf('.')!=req.url.lastIndexOf('.'))next()
	if(ok.length==0)next()
	else res.end("408")
})


require('./connect')


// rsc.datas_all()
if(!session.langue||!session.pays){
	// console.log("sessssssssssssion : "+session)
	session.langue="fr"
	session.pays="ci"
	session.dataStored={}
}
 
// ----------------
// ----------------
// ----------------
// ----------------

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json()) 
app.use(cookieParser("ok"))
app.use(session({
  secret: 'dsqsqdqsd',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(passport.initialize())
app.use(passport.authenticate("session"))
app.use((req,res,next)=>{
	// res.cookie('ok',"just ok",{maxAge:1000000,httpOnly:false,signed:true})
	// res.cookie('ok',"just ok",{maxAge:1000000,httpOnly:false})
	// res.cookie('okok',"just ok again",{maxAge:1000000,httpOnly:true})
	// console.log("cookie")
	// console.log(req.cookies)
	// console.log(res.cookie)
	// console.log("cookie")
	next()
})
app.use((req,res,next)=>{
	// console.log("req.user :") 
	// console.log(req.user) 
	// console.log("req.session :") 
	// console.log(req.session)
	
	if(!req.session.langue)req.session.langue=session.langue
	if(!req.session.pays)req.session.langue=session.pays
	
	if(typeof req.session.connected=="undefined"){
		console.log("session nest pas definie")
		if(typeof req.user=="undefined"){
			console.log("user nest pas definie")
			if(typeof req.cookies.jesuschristtv!="undefined"){
				rsc.checkCookied(req,res,next) 
				console.log("cookie est bel et bien definie")
			}else{ 
				req.session.connected=0
				console.log("cookie nest pas definie")
				console.log('cookie nexiste pas et je sors')
				next()
			}
		}else{ req.session.connected=1//ce cas est sensé ne jamais se produire, car une fois connecté, req.session.connected est initialisé = 1
			//en gros, soit req.session.connected existe et donc req.user aussi,
			//soit req.session.connected n'existe pas et req.user non plus
			console.log("user est bel et bien definie")
			console.log('user existe et je sors')
			next()
		}
	}else{
		console.log('session est bel et bien définie et vaut : '+req.session.connected)
		console.log('je sors')
		next()
	}
})
// app.use((req,res,next)=>{let a=req.url.match(/\/_/);if(!a)rsc.check_murs_files(req);next()}) 
app.get("/testeme",(req,res)=>{
	var a={kk:"iijo",joji:"onojni",cdcd:['ono']}
	console.log(a)
	a=JSON.stringify(a)
	console.log(a)
	
})

// TEST DE DIFFERENCE AVEC session ET req.session
// session.id=1
// console.log(session)

//METHOD DE VERIFICATION TOKEN AVEC LES COOKIES
// let a=false;
// if(fn.checkCookie("jesuschristtv_con_token")){
	// a=fn.getCookie("jesuschristtv_con_token")
	// a=httpMsgs.checkCookied(res,a)
// }
// if(a)a=0
// else a=1
//VALEUR PAR DEFAULT token="fff" (cookie par defaut)
	token="fff"

//ACCUEIL ROUTE
router.route('/').get((req,res,next)=>{
	console.log("kjhjkh")
	console.log(req.session)
	// a=
	// console.log(req.session)
	res.sendFile('index.html',{root:__dirname+"/../"})
	// next()
})
// router_.get('/ioj',(req,res,next)=>{
	// console.log("aaaa")
	/////////////// La méthod express 'send()' renvoie du texte brut
	/////////////// La méthod express 'sendFile("",{})' n'est pas similaire à la m"thode render('',{})
	// res.send('aaa')
	// res.sendFile('index.html',{root:__dirname+"/../"})
	// next()
// })
// router_.get('/ioj/kjh',(req,res,next)=>{
	// console.log("___")
	/////////////// La méthod express 'send()' renvoie du texte brut
	// res.send('jhgh')
	// next()
// })
// router.get('/',(req,res,next)=>{
	// console.log("kjhjkh")
	/////////////////// La méthod express 'send()' renvoie du texte brut
	// res.send('jhgh')
	// next()
// })
// app.use("/",router)
// app.use("/ioj",router_)
// app.use("/ioj",router_)

// app.get("/teste_formidable",(req,res)=>{res.writeHead(200,{"content-type":"text/html"})
// res.end(`
// <form action="/teste_formidable" method="POST" enctype="multipart/form-data">
		// <input name="okk" >
		// <input name="kk" >
		// <input name="k" >
		// <input type="file" name="ok" multiple>
		// <button>ok</button>
// </form>`)
// })
// app.post("/teste_formidable",(req,res)=>{rsc.uploadfile(req,res)})
// app.post("/teste_formidable",(req,res)=>{a=new m.Form();a.parse(req,function(err,f,ff){console.log(JSON.stringify(ff));console.log(JSON.stringify(f))})})
// app.get("/teste_cond_async",(req,res)=>{if(false)res.end('ok');else if(rsc.ol(req,res))res.end('passing');else console.log('passsed')})

app.get("/_/search/:checked/:dates/:search",(req,res)=>{rsc.search(req,res)})
app.get("/_/write_msg/:id/:ajouteur/:ajouteur_/:msg",(req,res)=>{rsc.write_msg(req,res)})
app.get("/_/search_in_acted/:id/:acted/:on/:value",(req,res)=>{rsc.search_acted(req,res)})
app.post("/_/livredor/:id",(req,res)=>{rsc.livredor(req,res)})
app.get("/_/show_group/:id",(req,res)=>{rsc.show_group(req,res)})
app.post("/_/add_group",(req,res)=>{rsc.add_group(req,res)})
app.get("/_/map/:pays",(req,res)=>{rsc.nav_bar(req,res,1,false)})
app.get("/_/map/*",(req,res)=>{console.log('fuuuuuuuuck')})
app.post("/_/add_map",(req,res)=>{rsc.add_map(req,res)})
app.post("/_/promo_map",(req,res)=>{rsc.promo_map(req,res)})
app.get('/9/*',(req,res,next)=>{
	let tmp=null
	console.log(req.url)
	if(!req.session.langue||!req.session.pays){
		// console.log("jes uis denas la création de req.session")
		req.session.langue="fr"
		req.session.pays="ci"
		req.session.dataStored={}
	}
	console.log(req.url.indexOf('.')+"     "+req.url.indexOf('%'))
	// if(req.url.indexOf('/9/')==-1)next()
	let sql=`SELECT ${req.session.langue} FROM _text WHERE username="_all_bar_top"`
	rsc.request(req,res,sql).then((r)=>{ 
		// for(a in r)console.log(a)
		console.log("rsc::liens was resolved : "+req.url);
		// console.log(req.url)
		// console.log(r)
		// console.log(typeof r)
		r=JSON.parse(r[req.session.langue])
		// console.log(typeof r)
		if(req.url.indexOf(r.map.href)!=-1)tmp=1
		if(req.url.indexOf(r.iwai.href)!=-1)tmp=2
		if(req.url.indexOf(r.button_account.href)!=-1)tmp=3
		// console.log(r.button_account.href+"___"+r.map.href+"___"+r.iwai.href)
		// console.log(req.url.indexOf(r.button_account.href)+"___"+req.url.indexOf(r.map.href)+"___"+req.url.indexOf(r.iwai.href))
		// console.log(tmp)
		if(!tmp)next()
		else rsc.nav_bar(req,res,tmp)
	}).catch((r)=>{console.log(r+"\nrsc::liens was rejected : "+req.url);console.log(r);next()})
})
app.post("/add_priere",(req,res)=>{rsc.add_priere(req,res)})
app.get("/2/:lien/:info",(req,res)=>{rsc.uniq2(req,res)})
app.get("/1/:lien/:info",(req,res)=>{rsc.uniq1(req,res)})
app.get("/0/:lien/:info",(req,res)=>{rsc.uniq0(req,res)})
app.get("/mult_search/:context/:type/:aj/:s/:notin",(req,res)=>{rsc.mult_search(req,res)})
app.post("/poser_logos/:type",(req,res)=>{rsc.put_logos(req,res)})
app.get("/set_logos",(req,res)=>{rsc.logos_(req,res)})
app.post("/set_logos",(req,res)=>{rsc.logos_(req,res)})
app.get("/get_logos",(req,res)=>{rsc.logos(req,res)})
app.get("/get_logos/:date/:langue",(req,res)=>{rsc.logos(req,res)})
app.get("/guerir/:user",(req,res)=>{rsc.guerir(req,res)})
app.post("/discussions",(req,res)=>{rsc.discussions(req,res)})
app.post("/discussions_",(req,res)=>{rsc.discussions(req,res)})
app.get("/discussions/:bool",(req,res)=>{rsc.discussions(req,res)})
app.get("/discussions_/:bool",(req,res)=>{rsc.discussions(req,res)})
app.get("/discussions/:bool/:without",(req,res)=>{rsc.discussions(req,res)})
app.get("/discussions_/:bool/:without",(req,res)=>{rsc.discussions(req,res)})
app.get("/add_comment/:table/:id/:user_id/:comment",(req,res)=>{rsc.add_comment(req,res)})
app.get("/get_users/:ids/:type",(req,res)=>{rsc.get_users(req,res)})
app.get("/join/:object/:user/:id/:bool",(req,res)=>{rsc.join(req,res)})
app.get("/likes/:object/:user/:type/:id",(req,res)=>{rsc.likes(req,res)})
app.get("/likes/:object/:user/:type/:id/:uplet",(req,res)=>{rsc.likes(req,res)})
app.get("/user_account/:user_href",(req,res)=>{rsc.user_account(req,res)})
app.get("/type_1/:type",(req,res)=>{rsc.type_1(req,res)})
app.get("/type_2/:type",(req,res)=>{rsc.type_2(req,res)})
app.post("/22/confession",(req,res)=>{rsc.confession(req,res)})
app.get("/22/confession/:msg",(req,res)=>{rsc.confession(req,res)})
app.get("/_/changer/:ids",(req,res)=>{rsc.sauver(req,res)})
app.get("/_/changer/:ids/:type",(req,res)=>{rsc.sauver(req,res)})
app.get("/fill_file/:requete",(req,res)=>{
	rsc.write_file(req,res)
})
app.get("/fill_file/:requete/:ids/:theme/:zone",(req,res)=>{
	rsc.write_file(req,res)
})
app.get("/logout",(req,res)=>{
	console.log('logout')
	rsc.logout(req,res)
})
app.get("/*",(req,res)=>{
	console.log(req.url)
	console.log(req.cookies)
	// TEST DE DIFFERENCE AVEC session ET req.session
	// session.id_=1
	// console.log(session)
	// console.log(session.id_)
	// req.session.id_=1
	// console.log(req.session)
	// console.log(req.session.id_)
	
	// res.clearCookie("_id_")
	// res.cookie("_id_","___1___",{domain: 'http://localhost:8080/',path:'/ok',maxAge:1000000000,httpOnly:true})
	// console.log(res.cookie("_id_","___1___",{domain: 'http://localhost:8080/',path:'/ok',maxAge:1000000000})._headers['set-cookie'])
	// console.log(res.cookie("qsd")+"\n")
	// console.log(res.cookie("id_")._headers+"\n")
	// console.log(res.cookie("aaa")._headers['set-cookie']+"\n")
	// console.log(res.cookie("_id_")._headers['set-cookie'][0]+"\n")
	
	// var b=""
	// for(a in req)b+=a+";"
	// console.log(b)
	
	// var a=rsc.a()
	// console.log(a)
	
	filename=""
	// console.log(req.session.connected)
	if(!req.session.langue)req.session.langue=session.langue
	// if(req.session.cookieToken){
		////////////////// console.log("req.session.cookieToken "+req.session.cookieToken)
		////////////////// console.log("req.session.connected "+req.session.connected)
		// rsc.checkCookied(req,res)
	// }else{
		// req.session.connected=0
		// console.log("_____"+req.session.connected)
		// rsc.cookieRedirect_(req,res)
	// }
	console.log("ok")
	rsc.cookieRedirect_(req,res)
	console.log("ok")
})
// app.get("/reseau-social-chretien",(req,res)=>httpMsgs.showHome(res,{connected:0}))
//SIGNIN ET LOGIN ROUTE
app.post("/test",(req,res)=>{
	console.log(req.body.test)
})
app.post("/aumone",(req,res)=>{rsc.aumone(req,res)})
app.post("/benevolat",(req,res)=>{
		let form=new m.Form(),a
		form.parse(req,function(err,fields,files){
			reqBody={}
			for(a in fields)reqBody[a]=fields[a][0]
			for(a in files)reqBody[a]=files[a]
			rsc.signup_benevolat(req,res,reqBody)
		})
})
app.post("/murs",(req,res)=>{
		let form=new m.Form(),a
		form.parse(req,function(err,fields,files){
			reqBody={}
			for(a in fields)reqBody[a]=fields[a][0]
			for(a in files)reqBody[a]=files[a]
			rsc.murs(req,res,reqBody)
		})
})
app.post("/dieu-le-pere-esperance-chretienne",(req,res)=>{
	let reqBody_={},add_all_page=""
	
	console.log(req.url)
	
	reqBody=req.body
	
	if(reqBody.requete&&reqBody.requete!="")rsc["insert_esperance"](req,res)
	else throw new Error("L'enregistrement n'a pas pu avoir lieu car la requete 'requete' n'existe pas dans le bodyParser 'req.body'")
})
app.post("/vierge-marie-charite-chretienne",(req,res)=>{
	let reqBody_={},add_all_page=""
	
	console.log(req.url)
	
	reqBody=req.body
	
	if((reqBody.requete&&reqBody.requete!="")||reqBody.horaires)rsc["insert_oeuvre"](req,res)
	else throw new Error("L'enregistrement n'a pas pu avoir lieu car la requete 'requete' n'existe pas dans le bodyParser 'req.body'")
})
app.post("/jesus-christ-foi-chretienne",(req,res)=>{
	let reqBody_={},add_all_page=""
	
	console.log(req.url)
	
	reqBody=req.body
	
	console.log(JSON.stringify(req.body))
	
	if(fn.objLength(reqBody)!=0)
		if(reqBody.requete&&reqBody.requete!="")rsc["insert_"+reqBody.requete](req,res)
		else throw new Error("L'enregistrement n'a pas pu avoir lieu car la requete 'requete' n'existe pas dans le bodyParser 'req.body'")
	else{
		let form=new m.Form(),a
		form.parse(req,function(err,fields,files){
			reqBody={}
			for(a in fields)reqBody[a]=fields[a][0]
			for(a in files)reqBody[a]=files[a]
			
			// console.log(JSON.stringify(reqBody.files))
			// console.log(JSON.stringify(reqBody))
			
			if(fields.requete)rsc["insert_"+reqBody.requete](req,res,reqBody)
			else throw new Error("L'enregistrement n'a pas pu avoir lieu car la requete 'requete' n'existe pas dans le bodyParser 'req.body'")
		})
	}
})
app.post("/reseau-social-chretien_",passport.authenticate('signin',{failureRedirect:"/"}),
	(req,res)=>{
		console.log('enregistréééééééé')
		res.redirect('/')
	}
)
// app.post("/reseau-social-chretien",	(req,res)=>{res.end('ok')	})
app.post("/reseau-social-chretien",passport.authenticate('login',{failureRedirect:"/ok"}),
	(req,res)=>{
		console.log('okok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!okok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!okok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!okok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
		rsc.setCookied(req,res)
	}
)
app.post("/reseau-social-chretien",(req,res)=>{
	let reqBody_={},add_all_page=""
	
	console.log(req.url)
	
	reqBody_=req.body
	// console.log("reqBody_._method_ : "+reqBody_._method_)
	//ESSAYE DE CHANGER LA VALEUR DE req.method
	if(reqBody_._method_)
		switch(reqBody_._method_){
			case"PUT":reqBody_="update"
			break
			case"DELETE":reqBody_="delete"
			break
			default:reqBody_="other"
			break
		}
		
	if(typeof reqBody_!="string")
		if(req.session.connected!=1)
			if(reqBody_.login=="")rsc.login(req,res,req.body)
			else rsc.passport(req,res,req.body,{username:"jjj",descr:"",confession:""},"users","hrefnomprenomemailpseudopwd","login")
		else{
			obj={connected:req.session.connected,object:{},flash:"accueil|&&|login_already"}
			sql="select * from pages where username IN('accueil')"
			rsc.parse_table_pages_from_serverjs(res,obj,sql)
			// httpMsgs.showHome(res,{connected:req.session.connected,object:{},flash:"Ne pas actualiser la page (vous êtes en POST) vous êtes déjà connecté"})
		}
	else{}
	// else rsc[reqBody_](res,req.body,reqBody_)
})
app.post("/.*",(req,res)=>{
	console.log('2')
})
app.listen(settings.port,()=>{console.log("connecté au port "+settings.port)})
module.exports=app



















// http.createServer((req,res)=>{
	// console.log(req.url+'ok'+req.method)
	////////res.write("<form method='POST' action='localhost:8080/ressource'><input name='else'></form>")
	////////console.log('ok')
	////////console.log("req.method : "+req.method)
	// if(req.method=="GET"){
		////////console.log('____get____')
		// if(req.url==="/z")httpMsgs.showHome(res)
		// else if(req.url==="/ressource")rsc.getList(res)
		// else if(req.url==="/ressource/get")rsc.getList_file(res,"get")
		// else if(req.url==="/ressource/post")rsc.getList_file(res,"post")
		// else if(req.url==="/ressource/update")rsc.getList_file(res,"update")
		// else if(req.url==="/ressource/delete")rsc.getList_file(res,"delete")
		// else if(req.url.indexOf("/ressource/")!=-1){
			// let pattern="[0-9]+"
			// let reg=new RegExp("/ressource/"+pattern)
			// if(reg.test(req.url)){
				// reg=new RegExp(pattern)
				// let id=reg.exec(req.url)
				// rsc.get(req,res,id)
			// }else httpMsgs.show404(res)
		// }else{}
	// }else if(req.method=="POST"){
		// let reqBody=""
		// let reqBody_=""
		////////NE S'EFFECTUE QUE POUR UNE REQUETE POST
		// req.on('data',(data)=>{
			////////console.log("typeof 'data' on POST recieving : "+typeof data+" || "+data)
			// reqBody+=data
			////////console.log("typeof 'data' on POST recieving : "+typeof reqBody+" || "+reqBody)
			// if(reqBody.length>1e7)//10KB
				// httpMsgs.show413(res)
			// reqBody='{"'+reqBody+'"}'
			// reqBody=reqBody.replace(/=/g,'":"').replace(/&/g,'","')
			////////console.log("reqBody : "+reqBody)
			// reqBody_=JSON.parse(reqBody)
			// if(reqBody_){
				////////console.log("reqBody_._method_ : "+reqBody_._method_)
				////////ESSAYE DE CHANGER LA VALEUR DE req.method
				// if(reqBody_._method_)
					// switch(reqBody_._method_){
						// case"PUT":reqBody_="update"
						// break
						// case"DELETE":reqBody_="delete"
						// break
						// default:reqBody_="other"
						// break
					// }
			// }else throw new Error("'reqBody_ n'a pas pu être formaté en JSON")
			////////console.log('____post____0'+reqBody_)
		// })
		// if(req.url==="/ressource")
			// req.on('end',()=>{
				////////console.log('____post____1'+reqBody_)
				////////console.log("reqBody_ : "+reqBody_)
				// if(typeof reqBody_!="string")rsc.add(res,reqBody)
				// else rsc[reqBody_](res,reqBody,reqBody_)
			// })
		// else httpMsgs.show404(res)
	// }else httpMsgs.show405(req,res)	
// })
// .listen(settings.port,()=>{console.log("connecté au port "+settings.port)})
