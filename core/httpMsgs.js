let settings=require('../settings')
let fs=require('fs')

exports.show200=(res)=>{
	res.writeHead(200,{"content-type":"text/html"})
	res.end()
}
exports.show200_responseJson=(res,msg)=>{
	res.writeHead(200,{"content-type":"text/html"})
	res.end(JSON.stringify({"msg":msg}))
}
exports.show200_file=(res,data,filename)=>{
	// settings.httpMsgsFormat='HTML'
	if(settings.httpMsgsFormat=="HTML")
		fs.readFile("./views/"+filename+".html","utf8",(err,data_)=>{
			if(err)throw err
			else {
				res.writeHead(200,{"content-type":"text/html"})
				res.end(data_.replace("{{data}}",JSON.stringify(data)))
			}
		})
	else if(settings.httpMsgsFormat=="JSON"){
		res.writeHead(200,{"content-type":"text/html"})
		res.end(JSON.stringify(data))
	}else{
		
	}
}
exports.sendJson=(res,data)=>{
	res.writeHead(200,{"content-type":"application/json"})
	res.end(JSON.stringify(data))	
}
exports.showHome=(res,object,filename)=>{
	console.log('__________________________________________')
	console.log(filename)
	if(!filename&&filename!="")filename="index"
	console.log('__________________________________________')
	console.log(filename)
	if(!object)object={void:"void"}
	// console.log(object)
	// for(var a in object)res.locals[a]=object[a]
	res.locals.value=object
	res.render(filename)
	// console.log('tttttteeesttttttttttttttt'+filename)
	// res.end()
	// console.log('tttttteeesttttttttttttttt')
	// return false
	// console.log('tttttteeesttttttttttttttt')
}
exports.showHome_=(res,filename)=>{
	if(!filename)filename="index"
	fs.readFile("./"+filename+".html","utf8",(err,data_)=>{
		if(err)throw err
		else {
			res.writeHead(200,{"content-type":"text/html"})
			res.end(data_)
		}
	})
}
exports.showHome__=(res,filename)=>{
	if(!filename||filename=="")filename="index"
	if(settings.httpMsgsFormat=="HTML")
		fs.readFile("./"+filename+".html","utf8",(err,data_)=>{
			if(err)throw err
			else {
				res.writeHead(200,{"content-type":"text/html"})
				res.end(data_)
			}
		})
	else if(settings.httpMsgsFormat=="JSON"){
		res.writeHead(200,{"content-type":"application/json"})
		res.end(JSON.stringify([{url:"/ressource",method:'GET',description:"To list all"},{url:"/ressource/:id",method:'GET',description:"To list for one entry"}]))
	}else{
		
	}
}
exports.show500=(res,err,data)=>{
	if(!data)data="void"
	if(settings.httpMsgsFormat=="HTML"){
		res.writeHead(500,"internal Error occured",{"content-type":"text/html"})
		res.end("<html><head><title>500</title><meta charset='utf8'></head><body>"+data+"<br>Erreur 500, internal Error occured : "+err+"<br><a href='/'>accueil</a></body></html>")
	}else if(settings.httpMsgsFormat=="JSON"){
		res.writeHead(500,"internal Error occured",{"content-type":"application/json"})
		res.end({data:data+"||EROOR occured : "+err})
	}else{
		
	}
}
exports.show500_=(res,err,data)=>{
	if(!data)data="void"
	if(settings.httpMsgsFormat=="HTML"){
		res.end("<html><head><title>500</title><meta charset='utf8'></head><body>"+data+"<br>Erreur 500, internal Error occured : "+err+"<br><a href='/'>accueil</a></body></html>")
	}else if(settings.httpMsgsFormat=="JSON"){
		res.end({data:data+"||EROOR occured : "+err})
	}else{
		
	}
}
exports.show404=(res)=>{
	if(settings.httpMsgsFormat=="HTML"){
		res.writeHead(404,"Ressource not found",{"content-type":"text/html"})
		res.end("<html><head><title>404</title><meta charset='utf8'></head><body>Erreur 404, Ressource not found</body></html>")
	}else if(settings.httpMsgsFormat=="JSON"){
		res.writeHead(404,"Ressource not found",{"content-type":"application/json"})
		res.end({data:"Ressource not found"})
	}else{
		
	}
}
exports.show405=(req,res)=>{
	if(settings.httpMsgsFormat=="HTML"){
		res.writeHead(405,"Method not supported",{"content-type":"text/html"})
		res.end("<html><head><title>405</title><meta charset='utf8'></head><body>Erreur 405, Method not supported</body></html>")
	}else if(settings.httpMsgsFormat=="JSON"){
		res.writeHead(405,"Method not supported",{"content-type":"application/json"})
		res.end({data:"Method not supported : "+req.method})
	}else{
		
	}
}
exports.show413=(res)=>{
	if(settings.httpMsgsFormat=="HTML"){
		res.writeHead(413,"Request entity too large",{"content-type":"text/html"})
		res.end("<html><head><title>413</title><meta charset='utf8'></head><body>Erreur 404, Request not found</body></html>")
	}else if(settings.httpMsgsFormat=="JSON"){
		res.writeHead(413,"Request not found",{"content-type":"application/json"})
		res.end({data:"Request entity too large"})
	}else{
		
	}
}