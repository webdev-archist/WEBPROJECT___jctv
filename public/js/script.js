//LE PROBLEME EST CARACTERE 'enter' DANS LES DONN2ES ENTR2ES PAR TEXTAREA: 
		//cp::créer une priere,
//LES DONNEES textarea ENREGISTRER AVEC LA LIBRAIRIE tinymce DOIVENT ETRE VALID2ES:
		//charite::mur
//
	
	
	
	var cpt,cptbis,user_connected=1,local_language="fr"
	// function a(){alert('ok')}
	function show_modal(x){
		
		$('#modals').css("display","block").animate({left:0,top:0,height:"100%",width:"100%"},1000,function(){$('#'+x).addClass('active');})
		// $('#'+x).show(1300);
		// $('#'+x).modal('show');
	}
	function objLength(obj){var k=0;for(var i in obj)k++;return k}
	function get_mcetiny(context){
		alert(context[0])
		alert(context.find('iframe')[0])
		alert(context.find('iframe body')[0])
		context.find('iframe body').attr({"id":"tinymce","class":"mce-content-body","data-id":"pc_aj_descr","contenteditable":"true","spellcheck":"false"}).html("<p><br data-mce-bogus='1'></p>")
	}
	function sauver_fill_ul(context,bool=true){
		let amen=alleluia=hosanna=0,tmp="",liked,tab={},aa=a=b=c="",div=$(discuss_messages),obj=context.obj
		
		let i=JSON.parse(obj.likes)
		for(ii in i){if(i[ii]=="amen")amen++;if(i[ii]=="alleluia")alleluia++;if(i[ii]=="hosanna")hosanna++;}
		if(i[user_connected])liked=i[user_connected]//REMPLACER 1 PAR LA VALEUR DE L'IDENTIFIANT USERS
		if(bool)bool="";else bool="_"
		if($(context).parent().hasClass('safe_'))div=$(discuss_messages_)
		
						// alert(obj.comments)
		let arr=JSON.parse(obj.comments)
		for(a in arr)if(b.indexOf(a.indexOf('_'))==-1){
			b+=a.substr(0,a.indexOf('_'))+","
			aa=a.substr(a.indexOf('_')+1)
		}
		b=b.substr(0,b.length-1)
						// alert(b+"\n"+c)
		if(b.length!=0){
	// alert('ok')
			$.get(
				"/get_users/"+b+"/infos",
				function(xhr){
					div.find('.message').remove()
					// alert(xhr)
					if(xhr.charAt(0)=='['){
	// alert('ok')
						xhr=JSON.parse(xhr)
						xhr.forEach(function(i){
	// alert('ok'+i.id)
							tab[i.id]=i
							c+=i.id+","
						})
						// alert(b+"\n"+c)
						for(a in arr){
							// alert(a)
							c=a.substr(0,a.indexOf('_'))
							div.append(`<div class="message"><a href="${tab[c].href}" title="${tab[c].nom} ${tab[c].prenom}">${tab[c].pseudo}</a><p><span>${a.substr(a.indexOf('_'))} : </span><br>${arr[a]}</p>
												<div class="modal_h_sh_info"><div class="likes"><span class="{{amen_}}"><span class="badge amen">{{count_amen}}</span><%= locals.value.object.esperance_type_0.shares.amen %></span><span class="{{hosanna_}}"><span class="badge hosanna">{{count_hosanna}}</span><%= locals.value.object.esperance_type_0.shares.hosanna %></span><span class="{{alleluia_}}"><span class="badge alleluia">{{count_alleluia}}</span><%= locals.value.object.esperance_type_0.shares.alleluia %></span></div></div>
											</div>
										`)
						}
					}
					else{alert("erreur klkpart")}
				}
			)
		}
		div.find('textarea').off('keyup')
		div.find('textarea').on('keyup',function(e){
			let self_=this
			if(e.key=="Enter"){
				alert("il y a un probleme ici\nla fonction escape n'accepte pas tous les caractere\npar exemple 'ù' produit une erreur\ntrouver une solution")
				$.get(
					"/add_comment/discussions"+bool+"/"+obj.id_d+"/1/"+escape(this.value),
					function(xhr){
						// alert(xhr)
						if(xhr==0)alert('erreur talk')
						else if(xhr==1){
							alert("oijioj")
							div.append(`<div class="message"><a href="href_du_user_a_inserer_ici" title="nom et prenom du user à insérer ici">pseudo du user à insérer ici</a><p><span>${new Date()} : </span><br>${self_.value}</p>
												<div class="modal_h_sh_info"><div class="likes"><span class="{{amen_}}"><span class="badge amen">{{count_amen}}</span><%= locals.value.object.esperance_type_0.shares.amen %></span><span class="{{hosanna_}}"><span class="badge hosanna">{{count_hosanna}}</span><%= locals.value.object.esperance_type_0.shares.hosanna %></span><span class="{{alleluia_}}"><span class="badge alleluia">{{count_alleluia}}</span><%= locals.value.object.esperance_type_0.shares.alleluia %></span></div></div>
											</div>`)
							self_.value=""
						}
						else alert(xhr)
					}
				)
			}
		})
	}
	function paroles(type,curdiv){
		let $ul=curdiv.find('ul'),obj_=$ul[0].obj,$lis=curdiv.find('ul li'),tmp,h,q,h3s
		// q=$ul[0].obj[0]
		// if(typeof ((h=obj[0])[0])=="undefined")h=obj_[1];else q=obj_[1]
		// alert(JSON.stringify(obj_))
		h=obj_.homelies
		q=obj_.questions
		
		// alert(obj)
		// alert(objLength(obj))
		// alert('ok')
		if(curdiv.find('.paroles').length==0){
			curdiv.prepend("<div class='paroles trbl0 bg-whites'><span onclick=\"$(this).parent().slideUp();$(this).parent().removeClass('z100')\" class='close'>X</span></div>")
			curdiv.find('.paroles').append(curdiv.find('ul h3.h31'))
			curdiv.find('.paroles').append(curdiv.find('ul h3.h32'))
			curdiv.find('.paroles').append(curdiv.find('ul h3.h33'))
		}
		curdiv.find('.paroles').addClass("z100").slideDown()
		h3s=curdiv.find('.paroles h3')
		curdiv.find('.paroles').html("<span onclick=\"$(this).parent().slideUp();$(this).parent().removeClass('z100')\" class='close'>X</span>")
		curdiv.find('.paroles').append(h3s)
		
		// alert("$ul[0].obj.length : "+$ul[0].obj.length)
		// alert("h : "+JSON.stringify(h))
		// alert("q : "+JSON.stringify(q))
		// alert(type)
		
		switch(type){
			case"h": 
				// if((tmp=$ul[0].obj[0]).username.indexOf('_h_')==-1)tmp=$ul[0].obj[0].username.indexOf('_h_')!=-1?$ul[0].obj[0]:$ul[0].obj[1]
				curdiv.find('h3.h31').show()
				curdiv.find('h3.h32').hide()
				curdiv.find('h3.h33').hide()
				h.forEach(function(k){
					// alert(JSON.stringify(k))
					// alert(k.likes)
					// alert(obj.foi_liens_)
					// alert(typeof obj.foi_liens_.logos)
					// alert(obj.foi_liens_.logos)
					let user_tpl=Mustache.render(`<a class="" href="/user_account/{{_href}}" title="{{nom}} {{prenom}} {{pseudo}}" target="_blank"><!--<div class="ui avatar image {{ajouteurs_sprite_src}}"><span>{{pseudo}}</span></div>--><div class="ui avatar image "><img src="{{_img}}" title="{{_titre}}" alt="jesuschrist.tv {{nom}} {{prenom}} {{pseudo}}"></div><span style="background:white">{{pseudo}}</span></a>`,k)
					curdiv.find('.paroles').append(`
						<div class="homelie">
							<a target="_blank" class="tr0 outside boxSh" href="/0/${obj.foi_liens_.logos}/${k.titre.replace(' ','-')}" title="${k.titre}"><i class="glyphicon glyphicon-arrow-up"></i></a>
							<h4>${k.titre}</h4>
							${user_tpl}
							<span class="br0 w75 dis_">extraire un heure ici</span>
						</div>
					`)
					curdiv.find('.paroles>div:last')[0].obj=k
					curdiv.find('.paroles>div:last').click(function(e){
						let tmp=JSON.parse(k.likes),amen=hosanna=alleluia=0,liked="",d=new Date(),a,user=1
						// alert(k.id+'ok'+k.t_id+"\n reste plus qu'a activer les likes\n"+JSON.stringify(k))
						// alert($(homelies).find('.modal_header h4:first span:first').length)
						for(a in tmp){
							if(tmp[a]=="amen")amen++;else if(tmp[a]=="hosanna")hosanna++;else if(tmp[a]=="alleluia")alleluia++;
							if(a==user)liked="."+tmp[a]
						}
						show_modal("homelies")
						homelies.origine=this
						$(homelies).attr('data-data',k.id)
						$(homelies).find('.modal_header h4:first>span:first').html(d.toString().substr(0,25))
						$(homelies).find('.modal_header h4:first>span:last').html(user_tpl)
						$(homelies).find('.modal_header h4:last>span').html(k.titre)
						$(homelies).find('.modal_content').html(k.texte)
						// $(homelies).find('.modal_footer .type span').html(share)
						$(homelies).find('.modal_footer .amen').html(amen)
						$(homelies).find('.modal_footer .hosanna').html(hosanna)
						$(homelies).find('.modal_footer .alleluia').html(alleluia)
						
						// alert(liked+"\n"+$(homelies).find('.modal_footer '+liked)[0].className)
						$(homelies).find('.modal_footer '+liked).parent().addClass("liked")
						
						
						// $(homelies).find('.modal_footer .likes .badge').on("click",
							// function(e){
								// let _self=this
								//////////alert(self.context);
								// $.get(
									// "/likes/"+self.context+"/1/"+this.innerText.toLowerCase()+"/"+$(this).attr('data-data'),
									// function(xhr){
										// if(xhr==1){
											// self_.obj.likes[1]=_self.innerText.toLowerCase().replace(' ','')
											// if($(_self).parent().find('.liked').length!=0)
												// $(_self).parent().find('.liked').removeClass('liked')[0].removeAttribute('data-tooltip')
											// $(_self).addClass('liked').attr('data-tooltip',"Vous avez liké cette objet par "+_self.innerText.toLowerCase().replace(' ',''))
											//////////alert("____"+xhr)
										// }
									// }
								// )
							// }
						// )
					})
				})
			break
			case"q":
				let q_=JSON.parse(q.texte),a,d,u,reps,username,tmp,cpt
				// alert(JSON.stringify(q)+"\n\n"+q_+typeof q_)
				curdiv.find('h3.h31').hide()
				curdiv.find('h3.h32').show()
				curdiv.find('h3.h33').hide()
				
				for(a in q_){
					// alert(JSON.stringify(q_[a]))
					// alert(q_[a].q+"\n"+a)
					u=a.substr(0,a.indexOf('_'))
					d=a.substr(a.indexOf('_')+1)
					r=q_[a].r
					tmp=q_[a].q.substr(0,35)
					cpt=q_[a].r.length
					curdiv.find('.paroles').append(`
						<div data-data="${a}" class="question">
							<a target="_blank" class="tr0" href="/homelies/question/${a}" title="${q_[a].q}"><i class="glyphicon glyphicon-arrow-up"></i></a>
							<h4>${tmp}</h4>
							<span class="bl0 w25 dis_">(${cpt}) <i class="glyphicon glyphicon-folder-open"></i></span>
							<span class="br0 w75 dis_">${d}</span>
						</div>
					`)
					curdiv.find('.paroles>div:last').click(function(e){
						reps=""
						// let tmp=JSON.parse(k.likes),amen=hosanna=alleluia=""
						alert(d+'ok'+"\n reste plus qu'à activer la fct ajax pour récupérer l'auteur")
						// alert($(questions).find('.modal_header h4:first span:first').length)
						show_modal("questions")
						$(questions).find('.modal_header h4:first span:first').html(d)
						$(questions).find('.modal_header h4:first span:last').html(u)
						$(questions).find('.modal_header h4:last span').html(q_[a].q)
						$(questions).find('.modal_content span:first').html(r.length)
						$(questions).find('.modal_footer input[name=id]').val($(this).attr('data-data'))
						// $(questions).find('.modal_footer input[name=redirect]').val(document.URL)
						$(questions).find('.modal_footer input[name=redirect]').val($('#menu>a').eq(0)[0].href)
						r.forEach(function(k){
							// let r_obj={"un":k}
							// reps+=Mustache.render(`<li>{{un}}</li>`,r_obj)
							reps+=`<li>${k}</li>`
						})
						$(questions).find('.modal_content ul').html(reps)
						// $(questions).find('.modal_footer .type span').html(tmp.share.length)
						// $(questions).find('.modal_footer .amen').html(tmp.amen.length)
						// $(questions).find('.modal_footer .hosanna').html(tmp.hosanna.length)
						// $(questions).find('.modal_footer .alleluia').html(tmp.alleluia.length)
						// if(amen.indexOf(1)!=-1)amen="liked"
						// if(hosanna.indexOf(1)!=-1)hosanna="liked"
						// if(alleluia.indexOf(1)!=-1)alleluia="liked"
						
					})
				}
			break
			case"a":
				curdiv.find('h3.h31').hide()
				curdiv.find('h3.h32').hide()
				curdiv.find('h3.h33').show()
				curdiv.find('.paroles').append(`<h4>${archive_choose_d.innerHTML}</h4><input type="date">`)
				curdiv.find('.paroles input[type=date]').on("change",function(e){
					// alert(this.value)
					// alert(typeof this.value)
					let d=this.value.substr(8)
					let m=this.value.substr(5,2)
					let d_=d+m
					// alert(d_)
					let langue="fr"
					if(new Date(this.value).getTime()<new Date().getTime())
						$.get(
							"/get_logos/"+d_+"/"+langue,
							function(xhr){
								alert(xhr)
								fill_main_1_(curdiv,JSON.parse(xhr))
								curdiv.find('.paroles span')[0].click()
								// $(this).closest('.cinq').find('.publication').html(JSON.parse(xhr))
							}					
						)
					else alert("veuillez chosiir une date inférieur à aujourd'hui\net aussi insérer ce texte a partir de la base de onnée :p!!!!")
				})
			break
			default:alert('errur')
			break
		}
	}
	function fill_main_2(context,obj,tpl,bool=false){
		let amen=alleluia=hosanna=0,tmp=""
		
		obj.forEach(function(i){ 
			// alert(i)
			//////////////////////////////
			//Cette condition est a retirer
			//////////////////////////////
			if(i.href.indexOf('8080')==-1)
				i.href=document.URL+"&"+i.href
			//////////////////////////////
			//////////////////////////////
			tmp=Mustache.render(tpl,i)
			// alert(tpl)
			
			context.append(tmp)
			
			// alert(i.participate)
			if(i.participate){
				context.find('li:last .join')[0].bool=false;
				context.find('li:last .join')[0]._text=context.find('li:last .join')[0].lastChild.nodeValue
				context.find('li:last .join')[0]._title=context.find('li:last .join')[0].title
				context.find('li:last .join')[0].lastChild.nodeValue=context.find('li:last .join+span')[0].innerText;
				context.find('li:last .join')[0].title=context.find('li:last .join+span').attr("title");
				context.find('li:last .join')[0].className=context.find('li:last .join')[0].className.replace('danger','warning')
			}else if(i.participate===false)context.find('li:last .join')[0].bool=true;
			context.find('li:last')[0].obj=i
			if(bool){
				context.find("li:last a:first-of-type").click(function(e){
					let i=this.closest('li').obj,ii=0
					// alert(i._priere_)
					// alert(i.priere_0)
					// alert(i.priere_1)
					// alert('ok'+i.publications_)
					// alert(this.innerHTML)
					let $tmp=context.parent().find('.publications')
					$tmp.find('main div.trois h3').add($tmp.find('main div.trois .priere')).html("")
					$tmp.find('main>div').slideUp()
					$tmp[0].obj=i
					// alert($(this).closest('li').find('.join')[0].bool)
					$tmp.find('.join')[0].bool=$(this).closest('li').find('.join')[0].bool
					$tmp.find('h1').html(i.titre)
					$tmp.find('header img').attr("src",i.img)
					// $tmp.find('h2').html("ceci est vide, à éliminer ou remplir dans formulaire")
					$tmp.find('h2').html(i.short_descr)
					$tmp.find('.un').html(i.descr)
					if(i.fin=="")$tmp.find('.deux').html("Cette communauté de prière commence à la date suivante : "+i.debut+"<br>et la communauté se termine à la date suivante : "+i.debut+"+365jours(à faire en js)<br>Chaque jour, la prière débute à : "+i.heure )
					else $tmp.find('.deux').html("Cette communauté de prière commence à la date suivante : "+i.debut+"<br>et la communauté se termine à la date suivante : "+i.fin+"<br>Chaque jour, la prière débute à : "+i.heure )
				
					$tmp.find('.trois ul').html(``)
					if(i.priere.indexOf('||')!=-1){
						$tmp.find('.trois ul').append(`<li>${i["_priere_"]}</li>`)
						// alert($tmp.find('.trois ul').html())
						$tmp.find('.trois ul li:last-of-type')[0].priere=i.priere_
					}
					while(typeof i["priere_"+ii]!="undefined"){
						// alert(i["_priere_"+ii])
						// alert(i["priere_"+ii])
						$tmp.find('.trois ul').append(`<li>${i["_priere_"+ii]}</li>`)
						$tmp.find('.trois ul li:last-of-type')[0].priere=i["priere_"+ii]
						ii++
					}
					$tmp.find('.quatre').html("trouver le moyen d'insérer la discution facebook associé à l'url '"+i.href+"'")
					
					// alert(i.publications_)
					//
					if(!i.publications_)i.publications_=[{id:"1",href:"#!1",title:"aaaaaaaaaa",html:"exemple1"},{id:"2",href:"#!2",title:"bbbbbbb",html:"exemple2"}]
					else i.publications_=JSON.parse(i.publications_)
					//
					if(objLength(i.publications_)==0)$tmp.find('.cinq>p').addClass('dis')
					$tmp.find('.cinq .publications_').html("")
					if(i.ajouteur!=user_connected)$tmp.find('.cinq>a').remove()
					for(ii in i.publications_){
						j=i.publications_[ii]
						// alert('ok')
						$tmp.find('.cinq .publications_').append('<li><a href="#!'+j.href+'" title="'+j.title+'" data-id="'+j.id+'">'+j.html+'</a></li>')
					}
					$tmp.find('.cinq .publications_ a').click(function(e){
						$.get(
							"/publication/"+i.id,
							function(xhr){
								alert(xhr)
								$(this).closest('.cinq').find('.publication').html(JSON.parse(xhr))
							}
						)
					})
					context.slideUp()
					context.closest('.active').find(".publications").slideDown()
					
				})
			}
		})
		
	}
	function fill_main_1_(context,obj){
		// alert(JSON.stringify(obj))
		// alert(JSON.stringify(obj[1]))
		let $ul=context.find('ul'),$div=context,$li
		$ul[0].obj={}
		$ul.find('li').remove()
		
		obj[0].forEach(function(i){
			// if(typeof i[0]=="undefined"&&(i.username&&i.username.indexOf('_q_')==-1)&&i!=null){
				// alert(JSON.stringify(i))
				$li=$("<li/>")
				$li.html(i.texte)
				$li.addClass("scrolly")
				$ul.append($li)
			// }else 
		})
		// alert(JSON.stringify(obj[1]))
		// alert(JSON.stringify(obj[2]))
		$ul[0].obj.homelies=obj[1]
		$ul[0].obj.questions=obj[2]
	}
	function fill_main_0(context,obj_,inner=false){
		let tmp=tmp_=_tmp="",tmp__="",tmp___=context.find(".btn-group").attr('data-theme')
		let __tmp=___tmp="",ii,cpt="",bool=true,lien=$(gauche).find('.actived')[0].context
		if(context.index()==2)lien=lien+"_"
		// alert(tmp___)
		// alert(objLength(obj_))
		// alert(context.length)
		// alert(context.find('ul li:last').length)
		// alert('ok '+typeof obj_)
		// alert('ok '+JSON.stringify(obj_))
		if(typeof obj_!=="number")
			if(inner){
				if(obj_.length==0)alert("Il n'y a pas d'autres données :(")
				else 
					obj_.forEach(function(i){
						// alert(objDis(i))
						// alert(tmp___+"]["+i.theme)
						// alert(i)
						let amen=alleluia=hosanna=0
						// for(ii in i)cpt+=ii+", "
						// alert(cpt)
						
						__tmp=i.theme
						if(i.zone_||i.type_)___tmp=i.zone||i.type
						else i.zone_="void"
						
						if(i.likes){
							i.likes=JSON.parse(i.likes)
							for(ii in i.likes){
								// if(i.likes[ii]=="amen")alert('un')
								// if(i.likes[ii]=="alleluia")alert('deux')
								// if(i.likes[ii]=="hosanna")alert('trois')
								if(i.likes[ii]=="amen")amen++;
								if(i.likes[ii]=="alleluia")alleluia++;
								if(i.likes[ii]=="hosanna")hosanna++;
							}
						}
						
						if(context.parent().attr('id')!='icones_images'){
							tmp=`
									<div class="infos_li">
										<div class="type" data-type="_${i.theme_}" data-zone="_${i.zone_}">
											<span>${__tmp}</span>
											<span>${___tmp}</span>
										</div>
										<div class="likes">
											<span><span class="badge amen">${amen}</span>amen</span>, <span><span class="badge alleluia">${alleluia}</span>alléluia</span>, <span><span class="badge hosanna">${hosanna}</span>hosanna</span>
										</div>
									</div>
									`
							_tmp=i.titre
						}else{
							tmp_=` data-tooltip="${i.type} ${i.title}" data-position="bottom center"`
							_tmp=`<img src="${i.img}" alt="${i.titre}" class="type" data-type="_${i.type_}" data-zone="_${i.theme_}" >`
						}
						context.find('ul li').each(function(ii,jj){
							if($(jj).attr("data-type")==i._id)bool=false
						})
						if(bool){
							context.find('ul').append(`<li class="list-group-item list-group-item-info" data-type="${i._id}">${tmp}
																	<a href="${i.href}" title="${i.title}" ${tmp_}>${_tmp}</a>
																	<a target="_blank" href="/0/${obj.foi_liens_[lien]}/${i.titre.replace(' ','-').toLowerCase()}" title="${i.title}" class="tr0 outside boxSh"><i class="glyphicon glyphicon-arrow-up"></i></a>
																</li>`)
							//	CHANGER CETTE UN INSTRUCTION PAR UN EVENT onclick QUI CONSTRUIT LE modalbox
							// AINSI JE N'AURAIS PAS A FAIRE CE onclick AILLEUR
							context.find('ul li:last')[0].obj=i
						}
						else alert("c'est juste un teste pour voir si la fonction de search marche bien\net donc pour voir si il n'y a pas de doublon chargé par le search")
						// tmp__+=i.id+","
						// alert(tmp__)
					})
				// context.find('ul')[0].ids=tmp__.substr(0,tmp__.length-1)
				// alert(context.find('ul')[0].ids)
			}else context.find('ul')[0].obj_=obj_
		else alert("erreur :( le fichier n'existe pas.")
	}
	
	$(function(){
		var a=$('#gauche a.menu')
		var aa=$('#gauche a.menu_petit')
		var aa_=$('#gauche button.menu_petit')
		var aa__=$('#gauche button.siteweb')
		var c=$('#main ul.show__livre')
		var cc=$('#icones_images ul')
		var ccc=$('#artistes_musique ul')
		var cccc=$('#films_cm ul')
		var d=$('#main>div')
		var e=$('#form_top .select_element div')
		
		 
		let tmp,tmp_={}
		if(obj.foi_liens)for(tmp in obj.foi_liens)tmp_[obj.foi_liens[tmp]]=tmp.replace(/_/g,'-')
		if(obj.charite_liens)for(tmp in obj.charite_liens)tmp_[obj.charite_liens[tmp]]=tmp.replace(/_/g,'-')
		if(obj.esperance_liens)for(tmp in obj.esperance_liens)tmp_[obj.esperance_liens[tmp]]=tmp.replace(/_/g,'-')
		if(typeof foi!="undefined"){obj.foi_liens_=tmp_;menu_liens_="foi_liens_"}
		if(typeof charite!="undefined"){obj.charite_liens_=tmp_;menu_liens_="charite_liens_"}
		if(typeof esperance!="undefined"){obj.esperance_liens_=tmp_;menu_liens_="esperance_liens_"}
		delete tmp
		delete tmp_
		
		
		//obselete
		//NAV
			//RECHERCHES
			// e.click(function(){
				// var a=$(this).attr('data-value');
				// var b=$(this).closest("form").find(".findpeople")
				// b.slideDown()
				// switch(a){
					// case"foi":b.attr("placeholder","Sur le blog de la foi");b.attr("data-value","foi");				break;
					// case"charite":b.attr("placeholder","Sur le blog de la charité");b.attr("data-value","charite");					break;
					// case"esperance":b.attr("placeholder","Sur le blog de l'espérance");b.attr("data-value","esperance");					break;
					// case"personne":b.attr("placeholder","Trouvez un membre");b.attr("data-value","personne");					break;
					// default:alert("nav recherche  switch default:erreur")
				// }
			// })
			
			
			
		
		
		
		// $(".aj input,.aj textarea").on('keydown',function(e){
			// if(e.key=="Enter")
				// e.preventDefault()
		// }
		// $(".aj .nex,.blog .nex").on('click',function(e){
		$(".aj .nex").on('click',function(e){
			$(this).next().trigger('click')
		})
		// $(".aj .nex_,.blog .nex_").on('click',function(e){
		$(".aj .nex_").on('click',function(e){
			$(this).next().focus();
		})
////////////////////////////////
//NE FONCTIONN PAS
// mais pour certains cas fonctionne.........
////////////////////////////////
// $("form").on('click',".nex",function(e){alert('odszezddzek')
	// $(this).next().trigger('click')
// })
// $("form").on('click',".nex_",function(e){
	// $(this).next().focus();
// })
// $("form").on('click',".blu",function(e){let tmp
	// alert('ok')
	// if((tmp=$(this).closest('fieldset').find('input[readonly]')))tmp.val($(this).val())
	// else alert("la class 'blu' n'a pas pu agir, il manque l'input readonly (ou autre probleme)")
// })
// $("form").on('click',".okok",function(e){
	// alert('ok')
// })
////////////////////////////////
////////////////////////////////
		$(".aj .infos").on('blur',function(e){
			if(this.obj)$(this).next().next().next().val(JSON.stringify(this.obj).replace(/"/g,"\\\""))
		})
		$(".aj .infos").on('keydown',function(e){
			if(this.obj===undefined)this.obj={}
			if(e.key=="Enter")
				e.preventDefault()
			if(e.key=="Control")this.keydown=true
			else if(!this.keydown)this.keydown=false
		})
		$(".aj .infos").on('keyup',function(e){
			var a=" || ",$c_aj_infos_=$(this).next().next()
			if(e.key=="Enter"){
				if(this.value.indexOf('http://')!=-1)this.value=this.value.replace('http://','')
				if(this.value.indexOf(':')!=-1&&this.value.indexOf(':')==this.value.lastIndexOf(':')&&this.value.substring(this.value.indexOf(':')+1)!=""){
					if($c_aj_infos_.val()=="")a=""
					if(this.obj[this.value.substring(0,this.value.indexOf(":"))]){
						$c_aj_infos_.val(
							$c_aj_infos_.val().substring(
								0,
								$c_aj_infos_.val().indexOf(this.value.substring(0,this.value.indexOf(":")))
							)
							+
							$c_aj_infos_.val().substring(
								$c_aj_infos_.val().indexOf(this.value.substring(0,this.value.indexOf(":")))
							).substring(
								$c_aj_infos_.val().substring(
									$c_aj_infos_.val().indexOf(this.value.substring(0,this.value.indexOf(":")))
								).indexOf(' || ')+4
							)
						)
					}
					$c_aj_infos_[0].value+=a+this.value
					this.obj[this.value.substring(0,this.value.indexOf(":"))]=this.value.substring(this.value.indexOf(":")+1)
					this.value=""
				}else alert("text_à_resortir_de_la_base_de_donnée\nVous devez une clé et une valeur séparés par deux points ':'")
			}
			if(this.keydown&&this.obj&&e.key=="Backspace"){
				$c_aj_infos_.val($c_aj_infos_.val().substring(0,$c_aj_infos_.val().lastIndexOf(' || ')))
				var ii=1,iii=objLength(this.obj)
				for(var i in this.obj){
					if(ii==iii)delete this.obj[i]
					ii++;
				}
			}
			this.keydown=false
		})
		$('.aj .modal_footer input').on("blur",function(e){
			// alert('ok')
			this.tmp=JSON.parse($(this).closest(".modal_footer").find('.links').val().replace(/\\/g,""));
			this.tmp[this.name]=this.value;
			$(this).closest(".modal_footer").find('.links').val(JSON.stringify(this.tmp).replace(/"/g,"\\\""))
		})
		$(".aj input[type=submit]").on('mousedown',function(e){
			// e.preventDefault()
			// alert($(this).parent().find("input[name=files]").val().replace(/\\/g,"/"))
			// alert($(this).parent().find("input[name=files]").length)
			// alert($(this).parent().find("input[name=files]").attr('name'))
			if($(this).parent().find("input[name=files]")){
				$(this).parent().find("input[name=files]")[0].tmp=JSON.parse($(this).parent().find('.links').val().replace(/\\/g,""));
				$(this).parent().find("input[name=files]")[0].tmp[$(this).parent().find("input[name=files]")[0].name]=$(this).parent().find("input[name=files]").val().replace(/\\/g,"/")
				$(this).parent().find('.links').val(JSON.stringify($(this).parent().find("input[name=files]")[0].tmp).replace(/"/g,"\\\""))
			}
		})
		$(".aj input[name=titre]").on('blur',function(e){
			// alert('ok')
			//IL FAUT S'OCCUPER DU CAS OU C'EST L'ADMINISTRATEUR (ajouteur===0) QUI ENTRE LES DONNEES
			if($(this).closest('form').find('input[name=ajouteur]').val()==0)
				$(this).closest('form').find('input[name=href]').val(document.URL+'='+this.value.replace(/ /g,'-'))
			else	$(this).closest('form').find('input[name=href]').val(document.URL+'='+this.value.replace(/ /g,'-'))
		})
		// $('body').on('click','.close',function(e){$(this).parent().slideUp()}
		// alert($("#homelies .likes>span").length)
		$("#homelies .likes>span").click(function(e){
			let like=$(this).find(">span")[0].className.replace('badge ','')
			let _self=this
			// alert($(homelies).attr('data-data'))
			$.get(
				"/likes/_varchar/1/"+like+"/"+$(homelies).attr('data-data')+"/opt",
				function(xhr){
					// alert("____"+xhr)
					if(xhr==1){
						alert(homelies.origine)
						alert(homelies.origine.obj)
						let user=1,tmp=JSON.parse(homelies.origine.obj.likes)
						tmp[user]=like
						homelies.origine.obj.likes=JSON.stringify(tmp)
						if($("#homelies .likes .liked").length!=0)
							$("#homelies .likes .liked").removeClass('liked')[0].removeAttribute('data-tooltip')
						alert($(_self).hasClass('liked'))
						if(!$(_self).hasClass('liked')){
							$(_self).addClass('liked').attr('data-tooltip',"Vous avez liké cette objet par "+like)
						}
					}
				}
			)
		})
		$(main).on('click','.outside',function(e){
			e.stopPropagation()
		})
		
		
		/*
		$('.sh .modal_footer p:first a').on("click",function(e){
			var a=document.createElement('ul')
			JSON.parse($(this).attr('data-links')).forEach(function(i){
				a.innerHTML+=`<li><a href="${i}" target="_blank">${i}</a></li>`
			})
			// alert($(this).parent().html())
			// alert(a)
			// alert(a.innerHTML)
			alert("ça ne marche pas....")
			$(this).parent()[0].appendChild(a)
			$(this).parent().parent().parent()[0].param=$(this).parent()
			$(this).parent().parent().parent().on("click",function(e){alert("....comme je voudrais");this.param.find('ul').remove();$(this).off()})
		})
		*/
		
		
		
		
		
		
		// $("#charite #droite button").click(function(){$(modal_aj_blog).find("input[name=redirect]").val(document.URL);show_modal('modal_aj_blog')})
		$("#charite #droite button").click(function(){$(modal_aj_blog).find("input[name=redirect]").val($('#menu>a').eq(1)[0].href);show_modal('modal_aj_blog')})
		$("#esperance #droite input:first").on("focus",function(){$("#modals+div input[name=type]").val("article");show_modal('modal_aj_murs')})
		$("#esperance #droite input:nth-child(2)").on("focus",function(){$("#modals+div input[name=type]").val("audio");show_modal('modal_aj_murs')})
		$("#esperance #droite input:last").on("focus",function(){$("#modals+div input[name=type]").val("video");show_modal('modal_aj_murs')})
		
		
		
		
		// button_self.href=document.URL.substr(0,document.URL.indexOf('#'))
		// button_account.href+=""
		$("#button_account").click(function(){alert("dans ressource.js-checkCookied(), là où connected=1, il faut faire une nvlle requete pour retirer qlq infos du user dont le href")})
		
		
		
		
		//obselete
		//UL#BLOG
		// $('#af_blog').click((e)=>{$('#blog').slideToggle();})
		
		
		
		//ASIDE GAUCHE LES MENUS PRINCIPAUX
		let menu_header=document.body.id
		let template_article_obj={}
		let template_article_linked_obj=[{},{}]
		let $tmp,mytpl0,mytpl1,mytpl_0,mytpl_1,mytpl_cp_form,mytpl_rc_form
		if(typeof foi!=="undefined"){
			// menu_header="foi"
			$tmp=$('#template_type_1')
			mytpl0=$tmp.html()
			$tmp.remove()
			// alert('ok'+mytpl0)
			$tmp=$('#template_type_1_')
			mytpl1=$tmp.html()
			$tmp.remove()
			$tmp=$('#template_type_2')
			mytpl_0=$tmp.html()
			$tmp.remove()
			$tmp=$('#template_type_2_ul')
			mytpl_1=$tmp.html()
			$tmp.remove()
			$tmp=$('#template_type_2_ul_')
			mytpl_1_=$tmp.html()
			$tmp.remove()
			$tmp=$('#template_cp_form')
			mytpl_cp_form=$tmp.html()
			$tmp.remove()
			$tmp=$('#template_rc_form')
			mytpl_rc_form=$tmp.html()
			$tmp.remove()
		}
		if(typeof charite!=="undefined"){
			// alert('ok')
			$tmp=$('#forms_tpl')
			mytpl_forms=$tmp.html()
			// $tmp.remove()
			$tmp=$('#benevolat_form_tpl')
			mytpl_form_b=$tmp.html()
			// $tmp.remove()
			$tmp=$('#lis_tpl')
			mytpl_lis=$tmp.html()
			// $tmp.remove()
			$tmp=$('#template_type_1')
			mytpl_0=$tmp.html()
			// $tmp.remove()
			$tmp=$('#lis_tpl')
			mytpl_1=$tmp.html()
			// $tmp.remove()
			$tmp=$('#li_b_tpl')
			mytpl_1_=$tmp.html()
			// $tmp.remove()
		}
		// {"article":{"h_img":"obj.foi_livres_h_img","h_h2":"obj.foi_livres_h2","m_video":"obj.foi_livres_video","m_p":"obj.foi_livres_text","f_h2":"obj.foi_livres_h3","f_a0":"obj.foi_livres_button_0","f_a1":"obj.foi_livres_button_1"}}
		function template_article_obj_(index){
			template_article_obj={}
			template_article_obj.h_img=obj[menu_header+"_"+index+"_h_img"]
			template_article_obj.h_h2=obj[menu_header+"_"+index+"_h2"].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
			template_article_obj.m_video=obj[menu_header+"_"+index+"_video"]
			template_article_obj.m_p=obj[menu_header+"_"+index+"_text"].replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#34;/g,'"').replace(/&#39;/g,"'")
			template_article_obj.f_h2=obj[menu_header+"_"+index+"_h3"].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
			template_article_obj.f_a0=obj[menu_header+"_"+index+"_button_0"]
			// template_article_obj.f_a0_theme=obj[menu_header+"_"+index+"__themes"]["_0"]
			if(index!="images"){
				template_article_obj.f_a1=obj[menu_header+"_"+index+"_button_1"]
				// template_article_obj.f_a1_theme=obj[menu_header+"_"+index+"__themes"]["_1"]
			}
			template_article_obj.nav={}
			switch(index){
				case'livres':
					template_article_obj.nav.un=obj.foi_liens_.livres;template_article_obj.nav.deux=obj.foi_liens_.livres_;template_article_obj.nav.trois=obj.foi_liens_.livres__;
					template_article_obj.nav._un=obj.foi_liens_.livres.replace(/-/g," ");template_article_obj.nav._deux=obj.foi_liens_.livres_.replace(/-/g," ");template_article_obj.nav._trois=obj.foi_liens_.livres__.replace(/-/g," ");
				break
				case'images':
					template_article_obj.nav.un=obj.foi_liens_.images;
					template_article_obj.nav._un=obj.foi_liens_.images.replace(/-/g," ");
					template_article_obj.nav.deux_="nodisplay";template_article_obj.nav.trois_="nodisplay";
				break
				case'musics':
					template_article_obj.nav.un=obj.foi_liens_.musics;
					template_article_obj.nav.deux=obj.foi_liens_.audios;
					template_article_obj.nav._un=obj.foi_liens_.musics.replace(/-/g," ");
					template_article_obj.nav._deux=obj.foi_liens_.audios.replace(/-/g," ");
					template_article_obj.nav.trois_="nodisplay";
				break
				case'films':
					template_article_obj.nav._un=obj.foi_liens_.films.replace(/-/g," ");template_article_obj.nav._deux=obj.foi_liens_.videos.replace(/-/g," ");
					template_article_obj.nav.trois_="nodisplay";
				break
				default:
				break
			}
			if(index=="livres"){
				template_article_obj.f_a2=obj[menu_header+"_"+index+"_button_2"]
				// template_article_obj.f_a2_theme=obj[menu_header+"_"+index+"__themes"]["_2"]
			}
			// alert(obj[menu_header+"_"+index+"_text"])
			// alert(template_article_obj.m_p)
		}
		function template_article_linked_obj_(index){
			template_article_linked_obj=[{},{},{}]
			for(var i in obj[menu_header+"_"+index+"__hs"])
				template_article_linked_obj[0][i]=obj[menu_header+"_"+index+"__hs"][i].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
			for(var i in obj[menu_header+"_"+index+"__btns"])
				template_article_linked_obj[0][i]=obj[menu_header+"_"+index+"__btns"][i].replace('&amp;','&').replace(/&#34;/g,'"').replace(/&#39;/g,"'")
			for(var i in obj[menu_header+"_"+index+"__s"])
				template_article_linked_obj[0][i]=obj[menu_header+"_"+index+"__s"][i].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
			template_article_linked_obj[0]["theme"]=obj[menu_header+"_"+index+"__themes"]["_0"]
			template_article_linked_obj[0]["input"]=obj[menu_header+"_"+index+"__i"].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
			if(index=="livres"){
				for(var i in obj[menu_header+"_"+index+"__hs__"])
					template_article_linked_obj[2][i]=obj[menu_header+"_"+index+"__hs__"][i].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
				for(var i in obj[menu_header+"_"+index+"__btns__"])
					template_article_linked_obj[2][i]=obj[menu_header+"_"+index+"__btns__"][i].replace('&amp;','&').replace(/&#34;/g,'"').replace(/&#39;/g,"'")
				for(var i in obj[menu_header+"_"+index+"__s__"])
					template_article_linked_obj[2][i]=obj[menu_header+"_"+index+"__s__"][i].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
				template_article_linked_obj[2]["theme"]=obj[menu_header+"_"+index+"__themes"]["_2"]
				for(var i in obj[menu_header+"_"+index+"__sbis"]){
					template_article_linked_obj[0][i]=obj[menu_header+"_"+index+"__sbis"][i].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
					// template_article_linked_obj[1][i]=obj[menu_header+"_"+index+"__sbis"][i].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
				}
			}
			if(index=="images"){
				for(var i in obj[menu_header+"_"+index+"__sbis"]){
					template_article_linked_obj[0][i]=obj[menu_header+"_"+index+"__sbis"][i].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
					// template_article_linked_obj[1][i]=obj[menu_header+"_"+index+"__sbis"][i].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
				}
			}
			if(index=="musics"){
				for(var i in obj[menu_header+"_"+index+"__sbis"]){
					template_article_linked_obj[0][i]=obj[menu_header+"_"+index+"__sbis"][i].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
					template_article_linked_obj[1][i]=obj[menu_header+"_"+index+"__sbis"][i].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
				}
				// obj[menu_header+"_"+index+"__sbis_"]=obj[menu_header+"_"+index+"__sbis"]
				// template_article_linked_obj[0]["input"]=obj[menu_header+"_"+index+"__i"].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
				// template_article_linked_obj[1]["input"]=obj[menu_header+"_"+index+"__i_"].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
			}
			if(index=="films"){
				obj[menu_header+"_"+index+"__s_"]=obj[menu_header+"_"+index+"__s"]
			}
			if(index!="images"){
				for(var i in obj[menu_header+"_"+index+"__hs_"])
					template_article_linked_obj[1][i]=obj[menu_header+"_"+index+"__hs_"][i].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
				for(var i in obj[menu_header+"_"+index+"__btns_"])
					template_article_linked_obj[1][i]=obj[menu_header+"_"+index+"__btns_"][i].replace('&amp;','&').replace(/&#34;/g,'"').replace(/&#39;/g,"'")
				for(var i in obj[menu_header+"_"+index+"__s_"])
					template_article_linked_obj[1][i]=obj[menu_header+"_"+index+"__s_"][i].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
				template_article_linked_obj[1]["theme"]=obj[menu_header+"_"+index+"__themes"]["_1"]
				template_article_linked_obj[1]["input"]=obj[menu_header+"_"+index+"__i_"].replace(/&#34;/g,'"').replace(/&#39;/g,"'")
			}
		}
		a.each(function(i,j){
			let b=JSON.parse(j.getAttribute('data-tab'));
			j.toActive=b[0];
			j.context=b[1];
			j.behavior=b[2];
			// j.innerHTML=j.innerHTML.replace("&amp;","&")
		})
		a.on("click",function(){
			// get_mcetiny($(pc_aj_descr).parent())
			let $tmp,$tmp_,$tmp__,tmp,tmp_,tmp__,tpl,tpl_,tpl__,tpl___
			$("#main>.active").removeClass('active')
			$("#gauche>.actived").removeClass('actived')
			$(this).addClass('actived')
			// alert(this.context.article)
			if(($tmp=$("#"+this.toActive)).length==0)
				if(this.behavior){
					let self=this,tmp,tmp_,tmp__
					
					template_article_obj_(this.context)
					template_article_linked_obj_(this.context)
					template_article_linked_obj[0].id=template_article_linked_obj[1].id=template_article_linked_obj[2].id=this.toActive
					
					tpl=Mustache.render(mytpl0,template_article_obj)
					tpl_=Mustache.render(mytpl1,template_article_linked_obj[0])
					tpl__=Mustache.render(mytpl1,template_article_linked_obj[1])
					tpl___=Mustache.render(mytpl1,template_article_linked_obj[2])
					$('#main').append("<div id='"+this.toActive+"' class='active scrolly'>"+tpl+tpl_+tpl__+tpl___+"</div>")
					$tmp=$("#"+this.toActive)
					
					$tmp.find("article footer a").on('click',function(e){
						let self_=$(this).closest('div')[0].id,tmp;tmp_=""
						// alert($(this).index())
						// alert($(this.parentNode).find('>a').length)
						if($(this).index()==1)tmp='(1)'
						else if($(this).index()==$(this.parentNode).find('>a').length)tmp='(2)'
						else{
							tmp='(3)'
							// alert('oo');
						}
						// alert("#"+self_)
						$("#"+self_+" .zero").slideUp();
						$("#"+self_+">div:nth-of-type"+tmp).slideDown();
						if(!this.get){
							// alert("#"+self_+">div:nth-of-type"+tmp+" .foi_options div : "+$("#"+self_+">div:nth-of-type"+tmp+" .foi_options div").length)
							this.get=true; 
							if(tmp.indexOf('3')!=-1)$.get("get_logos",function(xhr){fill_main_1_($('#'+self_+'>div:nth-of-type(3)'),JSON.parse(xhr))})
							else{
								// alert(self.context)
								if(self.context=="livres")if(tmp.indexOf("2")!=-1)$("#"+self_+">div:nth-of-type(2) select.musics").remove()
								$.getScript('files/'+$("#"+self_+">div:nth-of-type"+tmp+" .foi_options div").attr("data-theme")+'.js',function(d,s){fill_main_0($('#'+self_+'>div:nth-of-type'+tmp),JSON.parse(d),true)})
								$.getScript('files/'+$("#"+self_+">div:nth-of-type"+tmp+" .foi_options div").attr("data-theme")+'_.js',function(d,s){fill_main_0($('#'+self_+'>div:nth-of-type'+tmp),JSON.parse(d),false)})
							}
						}
					})
					// $tmp.find("article footer a:first").on('click',function(e){
						// let self=$(this).closest('div')[0].id
						//////////alert("#"+self)
						// $("#"+self+" .zero").slideUp();
						// $("#"+self+">div:first-of-type").slideDown();
						// if(!this.get){
							// this.get=true;
							// $.getScript('files/'+$("#"+self+" .foi_options:first div").attr("data-theme")+'.js',function(d,s){fill_main_0($('#'+self+'>div:first-of-type'),JSON.parse(d),true)})
							// $.getScript('files/'+$("#"+self+" .foi_options:first div").attr("data-theme")+'_.js',function(d,s){fill_main_0($('#'+self+'>div:first-of-type'),JSON.parse(d),false)})
						// }
					// })
					// $tmp.find("article footer a:last").on('click',function(e){
						// let self=$(this).closest('div')[0].id
						//////////alert('ok'+$("#"+self+" .foi_options:last div").attr("data-theme"))
						//////////alert('ok'+$("#"+self+">div:last-of-type").length)
						// $("#"+self+" .zero").slideUp();
						// $("#"+self+">div:last-of-type").slideDown();
						// if(!this.get){
							// this.get=true;
							// $.getScript('files/'+$("#"+self+" .foi_options:last div").attr("data-theme")+'.js',function(d,s){fill_main_0($('#'+self+'>div:last-of-type'),JSON.parse(d),true)})
							// $.getScript('files/'+$("#"+self+" .foi_options:last div").attr("data-theme")+'_.js',function(d,s){fill_main_0($('#'+self+'>div:last-of-type'),JSON.parse(d),false)})
						// }
					// })
					
					switch(this.context){
						case"images":
							// alert('here'+$tmp.length)
							$tmp.find("article footer a:first").addClass('safe')
							$tmp.find("article footer a:last").remove()
							// $tmp.find("article footer a:last").remove()
							$tmp.find("ul")[0].className=$tmp.find("ul")[0].className.replace("0","1")
						case"musics":
						case"films":
							// alert('here'+$tmp.length)
							$tmp.find("article footer a:nth-of-type(2)").remove()
							$tmp.find(">div:nth-of-type(3)").remove()
						break;
						case"livres":
							// alert('here'+$tmp.length)
							$tmp.find("article footer a:nth-of-type(2)").addClass('safe')
							$tmp.find(">div:nth-of-type(3) ul").removeClass("main_0").addClass("main_1_")
							$tmp.find(">div:nth-of-type(3) .foi_options").addClass("show_html_anchor")
							$tmp.find(">div:nth-of-type(3) .foi_options a:nth-of-type(4)").remove()
							$tmp.find(">div:nth-of-type(3) .foi_options input").add("#"+$tmp[0].id+">div:nth-of-type(3) .foi_options select").remove()
							$tmp.find(">div:nth-of-type(3) .foi_options button").removeAttr('onclick').click(function(e){
								show_modal("make_homelie")
								// $('#make_homelie').find('input[name=redirect]').val(document.URL)
								$('#make_homelie').find('input[name=redirect]').val($('#menu>a').eq(0)[0].href)
								alert($('#make_homelie').find('input[name=redirect]').length+" ___ ajouter l'id du user dans un input type hidden\nainsi que la langue")
							})
							// $tmp.find(">div:nth-of-type(3) .foi_options div").append(`<button class="btn btn-sm btn-info" onclick="show_modal('poser_question');$('#poser_question').find('input[name=redirect]').val(document.URL);alert('ajouter l id du user dans un input type hidden _____ ainsi que la langue')"><i class="">?</i></button>`)
							$tmp.find(">div:nth-of-type(3) .foi_options div").append(`<button class="btn btn-sm btn-info" onclick="show_modal('poser_question');$('#poser_question').find('input[name=redirect]').val($('#menu>a').eq(0)[0].href);alert('ajouter l id du user dans un input type hidden _____ ainsi que la langue')"><i class="">?</i></button>`)
							
						break
						default:
							alert('n existe pas')
						break
					}
					
					if(this.context!="images"){
						$('#'+this.toActive+'>div:not(:nth-of-type(3)) ul').on('mouseover','li',function(e){
							let a
							if(!this.obj)this.obj={}
							if((a=this.mouseover)===undefined){
								a=document.createElement('div');
								a.id="show_content";	
								a.innerHTML="<div><img src='"+this.obj.img+"' alt='"+this.obj.title+"' class=''/></div><div>"+this.obj.theme+"</div><p>"+this.obj.short_descr+"</p>";
								this.mouseover=a
							}
							this.appendChild(a);
						})
						$('#'+this.toActive+'>div:not(:nth-of-type(3)) ul').on('mouseout','li',function(e){	$('#show_content').remove()	})
					}
					
					if(this.context=="films")
						$tmp.find(".musics:not(input)").remove()
					
					$('#'+this.toActive+'>div ul').on("click","li",function(){
						// alert($("#modal_sh_"+$(this).parent().next().find(':first').attr('data-theme'))
						// alert($("#modal_sh_"+$(this).parent().next().find(':first').attr('data-theme'))[0])
						
						let $tmp=$("#modal_sh_"+$(this).parent().next().find(':first').attr('data-theme'))
						let share=0,liked="",self_=this,links={}
						// alert('un')
						if(this.obj.shares)share=objLength(JSON.parse(this.obj.shares))
						// alert('deux')
						let amen=alleluia=hosanna=0
						// alert('trois'+this.obj.likes)
						if(this.obj.likes){
							// let i=JSON.parse(this.obj.likes)
							let i=this.obj.likes,ii
							for(ii in i){if(i[ii]=="amen")amen++;if(i[ii]=="alleluia")alleluia++;if(i[ii]=="hosanna")hosanna++;}
							if(i[1])liked=i[1]//REMPLACER 1 PAR LA VALEUR DE L'IDENTIFIANT USERS
						}
						// alert('quatre')
						let infos={}
						if(this.obj.infos)infos=JSON.parse(this.obj.infos)
						// alert('cinq'+this.obj.links)
						if(this.obj.links!="")links=JSON.parse(this.obj.links)
						// alert('six'+this.obj.imgs)
						let imgs=[]
						if(this.obj.imgs)
							if(this.obj.imgs!="")imgs=this.obj.imgs.split(',')
						// alert(imgs.length+typeof imgs)
						
						$tmp.find(".modal_header h2").text(this.obj.titre)
						// alert('sept')
						// alert('sept'+this.obj.auteur)
						$tmp.find(".modal_header h2 a").text("- de "+JSON.parse(this.obj.auteur).nom)
						// alert('huit')
						$tmp.find(".modal_header h2 a").attr("href",JSON.parse(this.obj.auteur).lien)
						// alert('neuf')
						$tmp.find(".modal_header .author img").attr("src",this.obj._img)
						$tmp.find(".modal_header .author a").text(this.obj.pseudo)
						$tmp.find(".modal_header .author a").attr("href",document.URL.substr(0,document.URL.indexOf('/')+1)+"user_account/"+this.obj._href)
						$tmp.find(".modal_header .badge").text(share)
						$tmp.find(".modal_header .amen").text(amen)
						$tmp.find(".modal_header .alleluia").text(alleluia)
						$tmp.find(".modal_header .hosanna").text(hosanna)
						$tmp.find(".modal_header .coms").click(function(e){alert('ok')})
						$tmp.find(".modal_content p:first").html(this.obj.descr)
						$tmp.find(".modal_footer p:nth-of-type(3) a").each(function(i,j){j.className="";j.removeAttribute('data-tooltip');if(j.innerText.toLowerCase().replace(' ','')==liked){j.getAttribute('data-tooltip',"Vous avez liké cette objet par "+liked);j.className="liked";alert("je n'arrive pas à insérer le tooltip");}})
						let a=document.createElement('img')
						a.src=this.obj.img
						$tmp.find(".modal_content p:nth-of-type(2)").html(a)
						imgs.forEach(function(i){
							a=document.createElement('img')
							a.src=i
							$tmp.find(".modal_content p:nth-of-type(2)").append(a)
						})
						$tmp.find(".modal_content ul").html("")
						for(var i in infos){
							a=document.createElement('li')
							$(a).html(i+" : "+infos[i])
							$tmp.find(".modal_content ul").append(a)
						}
						// alert(links)
						// alert(links.buy)
						if(links.buy)$tmp.find(".buy").attr({"data-links":'["'+links.buy+'"]'})
						if(links.ebook)$tmp.find(".ebook").attr({"data-links":'["'+links.ebook+'"]'})
						if(links.dls)$tmp.find(".dls").attr({"data-links":'["'+links.dls+'"]'})
						if(links.files)$tmp.find(".files").attr({"data-links":'["'+links.files+'"]'})
						if(links.listen)$tmp.find(".listen").attr({"data-links":'["'+links.listen+'"]'})
						if(links.watch)$tmp.find(".watch").attr({"data-links":'["'+links.watch+'"]'})
						$tmp.find(".modal_footer p:nth-of-type(2) a").attr({href:$(this).find('a').attr('href')})
						$tmp.find(".modal_footer p:nth-of-type(3) a").attr({"data-data":this.obj._id})
						
						$tmp.find(".modal_footer p:nth-of-type(1) a").off()
						$tmp.find(".modal_footer p:nth-of-type(3) a").off()
						
						$tmp.find(".modal_footer p:nth-of-type(1) a").on("click",function(e){
							let tmp
							if((tmp=JSON.parse($(this).attr('data-links'))).length>1){
								let a=$(this).parent().parent().find('ul')
								a.html('')
								tmp.forEach(function(i){
									a.append(`<li><a href="${i}" target="_blank">${i}</a></li>`)
								})
							}else window.open(tmp[0])
						})
						$tmp.find(".modal_footer p:nth-of-type(3) a").on("click",
							function(e){
								let _self=this
								// alert(self.context);
								$.get(
									"/likes/"+self.context+"/1/"+this.innerText.toLowerCase()+"/"+$(this).attr('data-data'),
									function(xhr){
										if(xhr==1){
											let user=1
											self_.obj.likes[user]=_self.innerText.toLowerCase().replace(' ','')
											if($(_self).parent().find('.liked').length!=0)
												$(_self).parent().find('.liked').removeClass('liked')[0].removeAttribute('data-tooltip')
											if(!$(_self).hasClass('liked'))
												$(_self).addClass('liked').attr('data-tooltip',"Vous avez liké cette objet par "+_self.innerText.toLowerCase().replace(' ',''))
											// alert("____"+xhr)
										}
									}
								)
							}
						)
						
						show_modal("modal_sh_"+$(this).parent().next().find(':first').attr('data-theme'))
					})
					$('#'+this.toActive+'>div select').on("change",function(e){
						let self=this,tmp="type"
						if(this.className=="musics")tmp="zone"
						tmp_=$(this).parent().parent().find('ul .type')
						tmp_.each(function(i,j){
							// alert(i)
							// alert("j.getAttribute('data-'"+tmp+") ___ "+j.getAttribute('data-'+tmp)+"\nself.value : "+self.value)	
							//le select utilisé
							if(j.getAttribute('data-'+tmp)!=self.value&&self.value!="void"){
								// alert("j.getAttribute('data-'+tmp) ___ "+j.getAttribute('data-'+tmp)+"\nself.value : "+self.value)	
								$(j).parent().parent().fadeOut()
							}else $(j).parent().parent().fadeIn()
							
							//l'autre select d'à côté
							if($(self).parent().find('select.musics').length==1){
								if(tmp=="zone"){
									// alert("$(self).parent().find('select:not(.musics)').val() ___ "+$(self).parent().find('select:not(.musics)').val()+"\nj.getAttribute('data-type') : "+j.getAttribute('data-type'))
									if($(self).parent().find('select:not(.musics)').val()!=j.getAttribute('data-type')&&$(self).parent().find('select:not(.musics)').val()!="void")$(j).parent().parent().fadeOut()
								}else{
									// alert("$(self).parent().find('select.musics').val() ___ "+$(self).parent().find('select.musics').val()+"\nj.getAttribute('data-zone') : "+j.getAttribute('data-zone'))
									if($(self).parent().find('select.musics').val()!=j.getAttribute('data-zone')&&$(self).parent().find('select.musics').val()!="void")$(j).parent().parent().fadeOut()
								}
							}
						})
					})
					$('#'+this.toActive+'>div input.musics').on("keyup",function(e){
						let tmp="",$as=$(this).parent().parent().find('ul li a:first-of-type'),cpt,self=this,type=$(this).parent().parent().index(),aj=$(this).closest('.foi_options').find('a.active').index(),$lis=$(self).closest('div:not(.foi_options)').find('ul li')
						// alert($(gauche).find('.actived')[0].context)
						if(e.key=='Enter')
							if(this.value.length>2){
								$lis.each(function(ii,jj){
									tmp+=$(jj).attr("data-type")+","
								})
								tmp=tmp.substr(0,tmp.length-1)
								// alert($(self).closest('div:not(.foi_options)'))
								// alert($(self).closest('div:not(.foi_options)').length)
								// alert($(self).closest('div:not(.foi_options)')[0].style.display)
								// alert($(this).closest('.foi_options').find('a.active').length)
								// alert(aj)
								$.get(
									"/mult_search/"+$(gauche).find('.actived')[0].context+"/"+type+"/"+aj+"/"+escape(this.value)+"/"+tmp,
									function(xhr){
										// alert(xhr)
										fill_main_0($(self).closest('div:not(.foi_options)'),JSON.parse(xhr),true)
									}
								)
							}else alert('Entrer au moins 3 caractère\net charger ce texte à partir de la bdd')
						else 
							if(this.value.length>2)
								$as.each(function(i,j){ 
									// alert(j.innerHTML)
									if(j.innerHTML.toLowerCase().indexOf(self.value.toLowerCase())==-1)
										$(j).parent().fadeOut()
									else $(j).parent().fadeIn()
								})
							else $as.parent().fadeIn()
					})
					$('#'+this.toActive+'>div .foi_options').on("click",'a',function(e){
						let $currentDiv=$(this).parent().parent().parent()
						let $currentTheme=$(this).parent().attr('data-theme')
						let theme=$currentDiv.find('select:first')
						let zone=$currentDiv.find('select:last')
						// alert('eok'+$currentTheme)
						switch($(this).index()){
							case 0:
								if(!this.parentNode.cpt)this.parentNode.cpt=""
								if($currentTheme=="paroles")paroles("h",$currentDiv)
								else
									if(this.parentNode.cpt!=0){
										$currentDiv.find("ul").slideUp(function(){
											$(this).slideDown()
											// alert($currentDiv.find("h3:last").length)
											$currentDiv.find("h3:nth-of-type(2)").slideUp()
											$currentDiv.find("h3:first-of-type").slideDown()
										})
										
										//si .obj n'existe pas c'est que les donnée des membres n'ont jamais encore été chargé
										if($currentDiv.find("ul")[0].obj){
											//le .obj_ correspond à l'objet des données des membres,
											//tandis que le .obj correspond aux données de jesus-christ.tv
											
											//ici on sauvegarde les li des membres pour les remplacer par les li de jesus-christ.tv
											$currentDiv.find("ul")[0].obj_=$currentDiv.find("li").detach()
											
											//là, on charge les nouveaux li des données de jesus-christ.tv avec .obj
											// alert($currentDiv.find("ul")[0].obj[0].nodeName)
											$currentDiv.find("ul")[0].obj.each(function(i,j){
												// alert(i)
												// alert(j)
												// alert(this)
												$currentDiv.find("ul").append(j)
											})
										}
										// else alert("aucunes données chargées dsl :(")
									}
								this.parentNode.cpt=0
								
								// $("#livres_prieres h3").eq(0).html("Propositions de jésus-christ.tv")
								//utiliser mustache.js pour insérer de nouveaux livres (ceux des de jesus-christ.tv)*
								$(this).parent().find(".active").removeClass('active')
								$(this).addClass('active')
							break;
							case 1:
								if($currentTheme=="paroles")paroles("q",$currentDiv)
								else
									if(this.parentNode.cpt!=1){
										$currentDiv.find("ul").slideUp(function(){
											$(this).slideDown()
											$currentDiv.find("h3:nth-of-type(2)").slideDown()
											$currentDiv.find("h3:first-of-type").slideUp()
										})
										
										// alert($currentDiv.find("ul")[0].obj_[0].nodeName)
										//le .obj_ correspond à l'objet des données des membres,
										//tandis que le .obj correspond aux données de jesus-christ.tv
										
										//ici on sauvegarde les li de jesus-christ.tv pour les remplacer par les li des membres
										$currentDiv.find("ul")[0].obj=$currentDiv.find("li").detach()
										
										//là, on charge les nouveaux li des données des membres avec .obj_
										if($currentDiv.find("ul")[0].obj_[0])
											if($currentDiv.find("ul")[0].obj_[0].nodeName===undefined)
												fill_main_0($currentDiv,$currentDiv.find("ul")[0].obj_,true)
											else
												$currentDiv.find("ul")[0].obj_.each(function(i,j){	$currentDiv.find("ul").append(j)	})
										else alert("aucunes données chargées dsl :(")
									}
								this.parentNode.cpt=1
								// $("#livres_prieres h3").eq(0).html("Propositions des internautes")
								//utiliser mustache.js pour insérer de nouveaux livres (ceux des internautes)
								$(this).parent().find(".active").removeClass('active')
								$(this).addClass('active')
							break;
							case 2:
								if($currentTheme=="paroles")paroles("a",$currentDiv)
								else{
									// alert($(this).parent().attr('data-theme'))
									// alert(document.URL)
									show_modal("modal_aj_"+$(this).parent().attr('data-theme'))
								}
							break;
							case 3:
								// alert("$currentDiv.find('.foi_options .active').index() __ "+$currentDiv.find('.foi_options .active').index())
								// alert("self.context = "+self.context)
								let cpt=""
								tmp={}
								tmp_=$currentTheme
								tmp__=$currentDiv.find("ul li")
								tmp__.each(function(i,j){cpt+=j.getAttribute('data-type')+","})
								alert(theme.val())
								alert(zone.val())
								if($currentTheme=="images")zone="#"+zone
								if($(this).parent().find('.active').index()===1)tmp_+="_"
								// alert($(this).parent().find('.active').index())
								// alert(tmp_)
								// alert(cpt.substr(0,cpt.length-1)+"____")
								$.get(
									"/fill_file/"+tmp_+"/"+cpt.substr(0,cpt.length-1)+"/"+theme.val().substring(1)+"/"+zone.val().substring(1),
									// "/fill_file/"+tmp_+"/"+cpt.substr(0,cpt.length-1),
									function(xhr){
										// alert(xhr)
										fill_main_0($currentDiv,JSON.parse(xhr),true)
									}
								)
							break;
							default:alert('default index');break;
						}
					})
					$('#'+this.toActive+'>div .foi_options a')[0].click()
				}else if(this.context){
					if(this.context=='a'||this.context=='ap'){
						if(this.context=='a')tpl=aumone_tpl.innerHTML
						else tpl=auto_promo_tpl.innerHTML
						$('#main').append("<div id='"+this.toActive+"' class='active'>"+tpl+"</div>")
						let $self=$("#"+this.toActive)
						
//a
						// alert(document.URL)
						// $self.find(".redirect").val(document.URL)
						$self.find(".redirect").val($('#menu>a').eq(1)[0].href)
						$self.find('.scrolly.t.rig>form').on('submit',function(e){
							let tmp={}
							cpt=$(this)
							// alert('ok'+$self.find('#coordonnees input').length)
							$self.find('#coordonnees input').each(function(i,j){
								// alert(j.value)
								if(j.value==""){
									e.preventDefault()
									alert("vous devez remplir tous les champs de vos coordonnées")
									$(coordonnees).removeClass('border_actived')
									setTimeout("$(coordonnees).addClass('border_actived')",1)
									return false
								}
								tmp[j.id]=j.value
							})
							if($(this).find('input[name=type]').val()==""){
								e.preventDefault()
								// alert(cpt[0])
								alert("vous devez choisir un moyen de paiement (sepa,bancaire,mobile money, cheque) avant de valider")
								$(this).find('.reglement').removeClass('border_actived')
								setTimeout("cpt.parent().find('.reglement').addClass('border_actived')",1)
								return false
							}
							// tmp=JSON.stringify(tmp).replace(/"/g,"\\\""))
							$(this).find("input[name=coordonnees]").val(JSON.stringify(tmp))
						})
						$self.find('.reglement div:not(.paiement) button').on('click',function(e){
							// alert($(this).parent().index()-5)
							$(this).closest('.reglement').find('.paiement').eq($(this).parent().index()-5).slideToggle()
							$(this).closest('.scrolly').find('form input[name=type]').val($(this).attr('data-data'))
						})
						$self.find('.b button').on('click',function(e){
							$self.find('.actived').removeClass('actived')
							$self.find('.'+$(this).attr('data-type')).addClass('actived')
						})
						
//ap
						$self.find('ul.safe a').click(function(e){
							if(!$(this).closest('ul')[0].obj){
								// alert()
								let cpt=JSON.parse($self.find('div:last').html()),cptbis=$("<ul/>")
								// alert(cptbis.length)
								// alert(JSON.stringify(cpt))
								cpt[0].forEach(function(i){
								// alert(cptbis)
									cptbis.append(`<li onclick="alert('ouvrir modal_ sspécial pour share, et insérer le texte à l intérieur');$(share).find('textarea').val(this.innerHTML);show_modal('share')">${i}</li>`)
								// alert(cptbis)
								})
								cpt[0]=cptbis.html()
								// alert(JSON.stringify(cpt))
								
								cptbis=$("<ul/>")
								cpt[1].forEach(function(i){
									// alert(i)
									cptbis.append(`<li onclick="$(share).find('textarea').val(this.firstChild.href);show_modal('share')"><a target="_blank" href="/imgs/charite/auto_promo/${i}"><img onclick="" src="/imgs/charite/auto_promo/${i}"></li>`)
								})
								cpt[1]=cptbis.html()
								// alert(JSON.stringify(cpt))
								
								cptbis=$("<ul/>")
								cpt[2].forEach(function(i){
									cptbis.append(`<li onclick="$(share).find('textarea').val(this.firstChild.href);show_modal('share')"><a target="_blank" href="/imgs/charite/auto_promo/${i}"><img onclick="" src="/imgs/charite/auto_promo/${i}"></a></li>`)
								})
								cpt[2]=cptbis.html()
								
								$(this).closest('ul')[0].obj=cpt
								// alert(JSON.stringify(cpt))
							}
							let tmp=$(this).closest('ul')[0].obj,tmp_=$(this).parent().index()
							
							// alert(tmp)
							// alert(tmp_)
							// alert(tmp[tmp_])
							// alert(JSON.stringify(tmp[tmp_]))
							$self.find('ul:last').html(tmp[tmp_])
							
						})
					}else{
						let self=this,tmp,tmpbis
						// alert("this.behavior = "+this.behavior)
						// alert(menu_header+"_"+this.context+"_badges_0")
						obj[menu_header+'_'+this.context+'_accueil'].badge_0=obj[menu_header+"_"+this.context+"_badges_0"]
						obj[menu_header+'_'+this.context+'_accueil'].badge_1=obj[menu_header+"_"+this.context+"_badges_1"]
						if(obj[menu_header+'_'+this.context+'_accueil'].p)
							obj[menu_header+'_'+this.context+'_accueil'].p=obj[menu_header+'_'+this.context+'_accueil'].p.replace(/&#34;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">")
						tpl=Mustache.render(mytpl_0,obj[menu_header+'_'+this.context+'_accueil'])
						// alert(obj[menu_header+'_'+this.context+'_accueil'].p.replace(/&#34;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">"))
						// alert(obj[menu_header+'_'+this.context+'_accueil'].p)
						// alert(tpl)
						
						// if(this.context=="cp"||this.context=="rc")tpl_=eval("mytpl_"+this.context+"_form")
						if(this.context=="cp")tpl_=Mustache.render(mytpl_cp_form,{})
						// tpl_=mytpl_cp_form
						else if(this.context=="rc") tpl_=Mustache.render(mytpl_rc_form,{})
						// tpl_=mytpl_rc_form
						else{
							let i=0,tmp={oc:"_0",s:"_1",as:"_2"},tmp_={},_tmp
							if(this.context=="b")_tmp=mytpl_form_b
							else 
								for(let a in obj.charite_forms_)
									if(a.indexOf(tmp[this.context])!=-1){
										_tmp=mytpl_forms
										tmp_.action=obj.charite_forms_[tmp[this.context]]
										tmp_.titre_ph=obj.charite_forms_[tmp[this.context]+"_ph"]
										// alert('obj.charite_forms_[tmp[this.context]+"_opt"+i] = '+obj.charite_forms_[tmp[this.context]+"_opt"+i])
										while(typeof obj.charite_forms_[tmp[this.context]+"_opt"+i]!="undefined"){
											tmp_["opt"+i]='<li class="item" data-value="'+i+'"><a href="#" class="_blu">'+obj.charite_forms_[tmp[this.context]+"_opt"+i]+'</a></li>'
											i++
										}
									}
							// tmp_.o='<div class="okok">scdsqdsq</div>'
							tmp_.type=this.context
							tpl_=Mustache.render(_tmp,tmp_)
						}
					
						// alert(tpl)
						$('#main').append("<div id='"+this.toActive+"' class='active'>"+tpl+tpl_+"</div>")
						let $self=$("#"+this.toActive)
												
						//cp
						// alert($('.publications #publi_text').length)
						console.log($('.publications #publi_text').length)
						tinymce_opt.selector="#main_"+this.context+"_descr,#publi_text"
						console.log($('.publications #publi_text').length)
						tinymce.init(tinymce_opt);
						console.log($('.publications #publi_text').length)
						$("#cm_choix_priere .dropdown-menu.safe li").on('click',function(e){
							let a="",aa=$(this).attr('data-value'),variable_prieres_a_creer={}
							if(cm_i_priere.value!="")a=";"
							variable_prieres_a_creer[aa]="variable_priere_a_creer"
							// alert(aa)
							
							$("#cm_choix_priere .cm_priere").html(variable_prieres_a_creer[aa])
							
							if(cm_i_priere.value.indexOf(aa)==-1)cm_i_priere.value+=a+aa
							else cm_i_priere.value=cm_i_priere.value.replace(aa,"").replace(';;',';').replace(/^;/,"")
							
							if(this.className.indexOf(" already")==-1)this.className+=" already"
							else this.className.replace(' already','')
						})
						$("#cp_6_").on("blur",function(e){
							cm_i_priere.value=cm_i_priere.value.replace("||"+this.tmp+"||","")
							this.tmp=this.value
							if(this.value.length>5)cm_i_priere.value+="||"+this.value+"||"
						})
						tmp=new Date()
						if(tmp.getMonth().toString().length==1)tmpbis="0"+tmp.getMonth().toString()
						tmp=tmp.getFullYear()+"-"+tmpbis+"-"+tmp.getDate()
						$("#main_cp_debut").val(tmp)
						tmp=new Date()
						tmp=(tmp.getFullYear()+1)+"-"+tmpbis+"-"+tmp.getDate()
						$("#main_cp_fin").val(tmp)
						  
						//tooltips et buttons
						// alert(this.context)
						// alert('.'+self.context)
						// alert('.'+$self[0].context)
						$self.find('.self_buttons .icon.help').on("mouseover",function(){$(this).toggleClass('bg-pg');let tmp=$(this).find('.'+self.context),tmp_=tmp.length;tmp_=Math.floor(Math.random()*tmp_);$(this).attr('data-tooltip',tmp[tmp_].innerHTML)})
						$self.find('.self_buttons .icon.help').on("mouseover",function(e){$(this).toggleClass('bg-pg');e.stopPropagation()})
						$self.find('.present_img').click(function(){$self.find('article:eq(0)').slideUp(function(){$self.find('.main_2').slideUp();$self.find('img:eq(0)').slideDown()})})
						$self.find('.present_p').click(function(){$self.find('img:eq(0)').slideUp(function(){$self.find('article:eq(0)').slideDown()})})
						$self.on("click",".ui.basic.button.red",function(){
							$(this).closest('.active').find('ul.main_2').slideUp()
							$(this).closest('.active').find('.publications').slideUp()
							$(this).closest('.active').find('.mult').fadeOut()
							$(this).closest('.active').find('form:last').slideToggle()
						})
						$self.on("click",".ui.basic.button.green",function(){
							// alert("ok")
							$(this).closest('.active').find('>.mult').fadeOut()
							$(this).closest('.active').find('>form').slideUp()
							$(this).closest('.active').find('>.publications').slideUp()
							$(this).closest('.active').find('>ul.main_2').slideToggle();
							if(!this.obj){
								let self_=this,bool=false,context="",tmp={b:"benevolat",oc:"charite",s:"solidarite",as:"actionsocial"}
								// alert(self.context)
								if(typeof tmp[self.context]!="undefined")context=tmp[self.context]
								else context=self.context
								if(self.context=="cp")bool=true
								$.get(
									"/type_2/"+context,
									function(xhr){
										let tmp=mytpl_1,cpt="",cpt_=0,ii=1,langue="fr",temp,number=0
										// alert('xhr __ '+xhr)
										// alert('ok __ '+self.context)
										// alert('mytpl_1 __ '+mytpl_1)
										// alert('mytpl_1_ __ '+mytpl_1_)
										self_.obj=JSON.parse(xhr)
										// alert(objLength(self_.obj))
										self_.obj.forEach(function(i,j){
											switch(self.context){
												// case"cp":alert(i.username);self_.obj[cpt_]['_priere_'+ii]=i.username;if(cpt==i._id){self_.obj[cpt_]['priere_'+ii]=i[langue];delete self_.obj[j];ii++;}else{if((temp=i.priere.indexOf('||'))!=-1)i["_priere_"]=i.priere.substring(temp+2,i.priere.lastIndexOf('||')-2);i['priere_0']=i[langue];cpt_=j;cpt=i._id;ii=1}break;
												case"cp":
													// alert("_____"+i.username);
													// alert("_____"+objDis(i));
													if(cpt==i._id){
														self_.obj[cpt_]['priere_'+ii]=i[langue];
														self_.obj[cpt_]['_priere_'+ii]=i.username;
														delete self_.obj[j];
														ii++;
													}else{
														if((temp=i.priere.indexOf('||'))!=-1)i["_priere_"]=i.priere.substring(temp+2,i.priere.lastIndexOf('||'));
														i['priere_0']=i[langue];
														i['_priere_0']=i.username;
														cpt_=j;cpt=i._id;
														ii=1
													}
												break;
												case"oc":case"s":case"as":if(i.jour)i.jour=i.jour.substr(0,10);number=1;break;
												case"b":number=1;case"rc":tmp=mytpl_1_;if(i.jour)i.jour=i.jour.substr(0,10);break;
												case"":break;
												default:break;
											}
											i.type=context
											///////////////////////////////////////
											if(i.likes){
												i.count_amen=0
												i.count_hosanna=0
												i.count_alleluia=0
												// alert(i.likes)
												let j=JSON.parse(i.likes),jj
												// let j=self_.obj.likes,jj
												for(jj in j){if(j[jj]=="amen"){if(j[1])i.amen_="liked";i.count_amen++;}if(j[jj]=="hosanna"){if(j[1])i.hosanna_="liked";i.count_hosanna++;}if(j[jj]=="alleluia"){if(j[1])i.alleluia_="liked";i.count_alleluia++;}}
												i.count_shares=objLength(JSON.parse(i.shares))
											}
											///////////////////////////////////////
											i.ajouteur_href=i._href
											i.ajouteur_src=i._img
											i.ajouteur_title=i._titre
											i._ajouteur=i.nom+" "+i.prenom
											i.ajouteur_=i.pseudo
											if(i.comments){
												i.comments_count=objLength(JSON.parse(i.comments))
											}
											if(i.participants){
												i.participate=JSON.parse(i.participants).indexOf(user_connected)!==-1?true:false
												// alert(i.participate)
												i.participants_=JSON.parse(i.participants).length
												i.participants_count=JSON.parse(i.participants).length
											}
											if(i.responses){
												// alert('ok')
												let a=JSON.parse(i.responses)
												if(a[user_connected])$(b_presentation).find('form>span').removeClass("nodisplay_")
												else $(b_presentation).find('form>span').addClass("nodisplay_")
											}
											let temp_=i.activite||i.titre
											i.ancre_title=temp_
											i._href_="/"+number+"/"+obj[menu_liens_][self.context]+"/"+temp_.replace(/ /g,"-").toLowerCase()+"_"+i._id
										})
										// alert(xhr)
										// alert(self_.obj[0].titre)
										// alert(self_.obj[1].titre)
										fill_main_2($self.find('ul.main_2'),self_.obj,tmp,bool)
										// alert($('.publications .trois ul').length)
										$('.publications .trois ul').on('click','li',function(e){
											// alert(this.priere)
											//Trouver un moyen de remplacer le contenu de $(this).html() par un contenu plus concret
											$(this).parent().parent().find('h3').html($(this).html())
											
											$(this).parent().parent().find('.priere').html(this.priere)
										})
										$self.find('ul.main_2 li .likes>span').on("click",
											function(e){
												let _self=this
												// alert(self.context);
												// alert("/likes/"+context+"/1/"+_self.lastChild.nodeValue.toLowerCase()+"/"+$(_self).closest('li').attr('data-data'))
												$.get(
													"/likes/"+context+"/1/"+_self.lastChild.nodeValue.toLowerCase()+"/"+$(_self).closest('li').attr('data-data'),
													function(xhr){
														if(xhr==1){
															if($(_self).parent().find('.liked').length!=0)
																$(_self).parent().find('.liked').removeClass('liked')[0].removeAttribute('data-tooltip')
															if(!$(_self).hasClass('liked')){
																$(_self).addClass('liked')
																$(_self).parent().attr('title',"Vous avez liké cette objet par "+_self.lastChild.nodeValue)
															}
															alert("____"+xhr)
														}
													}
												)
											}
										)
										$self.find('.join').click(function(e){
											// alert(this.bool)
											e.stopPropagation()
											let tmp=$(this).closest('li').add($(this).closest('.publications'))[0].obj._id,_self=this,bool=this.bool,user=1
											$.get(
												"/join/"+context+"/"+user_connected+"/"+tmp+"/"+bool,
												function(xhr){
													// alert("just xhr : "+xhr)
													switch(xhr){
														case"0":case"00":
															alert('erreur '+xhr)
														break
														case"1":
															if(bool){
																alert('inscription réussie')
																_self.bool=false
																_self._text=_self.lastChild.nodeValue
																_self._title=_self.title
																_self.lastChild.nodeValue=$(_self).next()[0].innerText
																_self.title=$(_self).next().title
																_self.className=_self.className.replace('danger','warning')
															}else{			
																alert('désinscription réussie')		
																_self.bool=true												
																_self.lastChild.nodeValue=_self._text
																_self.title=_self._title
																_self.className=_self.className.replace('warning','danger')
															}
														break
														default:alert(xhr)
														break
													}
												}
											)
										})
										$self.find('.talk').click(function(e){
											let tmp=JSON.parse($(this).closest('li')[0].obj.comments),tmp_=$(this).closest('li').find('.talk_tag').add($(this).closest('li').find('.comments')),a,aa,b=c="",tab=[]
											let div=tmp_.find('div.scrolly'),text=tmp_.find('textarea'),self=$(this)
											
											tmp_.slideDown()
											if(!this.bool){
												this.bool=true
												for(a in tmp)if(b.indexOf(a.indexOf('_'))==-1){
													b+=a.substr(0,a.indexOf('_'))+","
													aa=a.substr(a.indexOf('_')+1)
												}
												b=b.substr(0,b.length-1)
												text.on('keyup',function(e){
													let self_=this
													if(e.key=="Enter"){
														alert("il y a un probleme ici\nla fonction escape n'accepte pas tous les caractere\npar exemple 'ù' produit une erreur\ntrouver une solution")
														$.get(
															"/add_comment/"+JSON.parse($(gauche).find('.actived').attr('data-tab'))[1]+"/"+self.closest('li')[0].obj._id+"/1/"+escape(this.value),
															function(xhr){
																// alert(xhr)
																if(xhr==0)alert('erreur talk')
																else if(xhr==1){
																	alert("oijioj")
																	div.append(`<p><a href="href_du_user_a_inserer_ici" title="nom et prenom du user à insérer ici">pseudo du user à insérer ici</a>${new Date()} : ${self_.value}</p>`)
																	self_.value=""
																}
																else alert(xhr)
															}
														)
													}
												})
												if(b.length!=0){
											// alert('ok')
													$.get(
														"/get_users/"+b+"/infos",
														function(xhr){
															// alert(xhr)
															if(xhr.charAt(0)=='['){
											// alert('ok')
																xhr=JSON.parse(xhr)
																xhr.forEach(function(i){
											// alert('ok'+i.id)
																	tab[i.id]=i
																	c+=i.id+","
																})
																// alert(b+"\n"+c)
																for(a in tmp){
																	// alert(a)
																	c=a.substr(0,a.indexOf('_'))
																	div.append(`<p><a href="${tab[c]._href}" title="${tab[c].nom} ${tab[c].prenom}">${tab[c].pseudo}</a>${a.substr(a.indexOf('_'))} : ${tmp[a]}</p>`)
																}
															}
															else{alert("erreur klkpart")}
														}
													)
												}
											}
											// alert('faire apparaitre une fenetre de dialogue facebook')
											
										})
										$self.find('ul.main_2 li .bourse').each(function(i,j){ 
											// alert(j.href)
											j.href=$("#gauche .menu").eq(5).attr("href")+j.href.substr(j.href.indexOf("="))
										})
										////////////UN-USED
										$self.find('.bourse________________').click(function(e){
											let tmp=$(this).closest('li')[0].obj.id_bourse
											
										})
										//////////
									}
								)
							}
						})
						$self.on('click',".nex",function(e){
							$(this).next().trigger('click')
						})
						$self.on('blur',".href",function(e){
							$(this).closest("form").find('input[name=href]').val(document.URL.substring(0,document.URL.indexOf('=')+1)+$(this).val().replace(/ /g,'-'))
						})
						$self.on('blur',".blu",function(e){
							let tmp
							if((tmp=$(this).closest('fieldset').find('input[readonly]')))tmp.val($(this).val())
							else alert("la class 'blu' n'a pas pu agir, il manque l'input readonly (ou autre probleme)")
						})
						$self.on('click',"._blu",function(e){
							let tmp
							if((tmp=$(this).closest('fieldset').find('input[readonly]')))tmp.val($(this).html())
							else alert("la class 'blu' n'a pas pu agir, il manque l'input readonly (ou autre probleme)")
						})
						$self.on('blur',".blur_b",function(e){
							let a=$('.blur_b')
							let b=$('input[name=horaires]')
							let c=""
							// alert(b.length)
							// for(i in a)if(a.hasOwnProperty(i))alert(a[i])
							// for(i in a)if(a.hasOwnProperty(i))alert($(a[i]).prev()[0])
							for(i in a)if(a.hasOwnProperty(i))
								if(typeof $(a[i]).prev()[0]!="undefined"){
									alert($(a[i])[0].value)
									c+=$(a[i]).prev().html()+" : "+$(a[i])[0].value+" || "
								}
							c.substr(0,c.length-4)
							b.val(c)
						})
					}
				}else{
					let addclass="",self=this,tmp,tmp_,bool=true
					// if(this.context=='a')tpl=aumone_tpl.innerHTML
					// else tpl=auto_promo_tpl.innerHTML
					switch(this.toActive){
						case"sauver_monde":
//FB::comments
						// FB.XFBML.parse();
						
						// <div id="fb-root"></div>
						// <script>(function(d, s, id) {
						  // var js, fjs = d.getElementsByTagName(s)[0];
						  // if (d.getElementById(id)) return;
						  // js = d.createElement(s); js.id = id;
						  // js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.10";
						  // fjs.parentNode.insertBefore(js, fjs);
						// }(document, 'script', 'facebook-jssdk'));</script>
						
						// <div class="fb-comments" data-href="http://webmastering-abidjan.ci/raymond/#job" data-numposts="5"></div>
						
//FB::share
						// <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=small&mobile_iframe=true&width=105&height=20&appId" width="105" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
						
// G+::share
						// <!-- Place this tag in your head or just before your close body tag. -->
						// <script src="https://apis.google.com/js/platform.js" async defer></script>
						// <!-- Place this tag where you want the share button to render. -->
						// <div class="g-plus" data-action="share" data-annotation="vertical-bubble" data-height="60" data-href="http://"></div>
						
						//async/dynamic
						// <!-- Place this tag where you want the share button to render. -->
						// <div class="g-plus" data-action="share" data-annotation="vertical-bubble" data-height="60" data-href="http://"></div>
						// <!-- Place this tag after the last share tag. -->
						// <script type="text/javascript">
						  // (function() {
							// var po = document.createElement('script'); 
						// po.type = 'text/javascript'; po.async = true;
							// po.src = 'https://apis.google.com/js/platform.js';
							// var s = document.getElementsByTagName('script')[0]; 
						// s.parentNode.insertBefore(po, s);
						  // })();
						// </script>
						
						
// Tweet::share
						// <a class="twitter-share-button"
						  // href="https://twitter.com/intent/tweet?text=Hello%20world&url="
						  // data-size="large">
						// Tweet</a>
						// alert("FB.XFBML.parse()\nreste à rajouter le user dans 'discuss_messages', et reste à pouvoir clore une discussion (pour celui qui l'a ouvert/créé)")
							addclass=""
							tpl=Mustache.render(sauver_tpl.innerHTML,obj.esperance_liens_)
							// if(!this.get){
								// this.get=true
							$.getScript('files/status0.js',function(data,status){
								// alert(status+"__"+data)
								JSON.parse(data).forEach(function(i){
									tmp=$('#'+self.toActive).find('.trois ul.safe')[0]
									tmp_=document.createElement('li')
									tmp_.className="discusses"
									tmp_.innerHTML=i.titre
									tmp_.obj=i
									$(tmp_).click(function(e){
										// alert(this.obj.id_d)
										$(discuss_messages).find('textarea').removeAttr('disabled')
										// alert(this.obj.comments)
										$(discuss_messages).find('p').html(this.obj.p)
										sauver_fill_ul(this)
									})
									$(tmp).append(tmp_)
								})
							})
							$.getScript('files/status1.js',function(data,status){
								// alert(status+"__"+data)
								JSON.parse(data).forEach(function(i){
									tmp=$('#'+self.toActive).find('.trois ul.safe')[0]
									tmp_=document.createElement('li')
									tmp_.className="discusses"
									tmp_.innerHTML=i.titre
									tmp_.obj=i
									$(tmp_).click(function(e){
										// alert(this.obj.id_d)
										$(discuss_messages).find('textarea').removeAttr('disabled')
										// alert(this.obj.comments)
										$(discuss_messages).find('p').html(this.obj.p)
										sauver_fill_ul(this)
									})
									$(tmp).append(tmp_)
								})
							})
							$.getScript('files/status0_.js',function(data,status){
								// alert(status+"__"+data)
								JSON.parse(data).forEach(function(i){
									tmp=$('#'+self.toActive).find('.un ul.safe')[0]
									tmp_=document.createElement('li')
									tmp_.className="discusses"
									tmp_.innerHTML=i.titre
									tmp_.obj=i
									$(tmp_).click(function(e){
										// alert(this.obj.id_d)
										$(discuss_messages_).find('textarea').removeAttr('disabled')
										// alert(this.obj.comments)
										$(discuss_messages_).find('p').html(this.obj.p)
										sauver_fill_ul(this,false)
									})
									$(tmp).append(tmp_)
								})
							})
							// }
						break
						case"miracles":case"conversions":
							let context=this.toActive
							tmp=obj["esperance_type_"+this.toActive]
							for(a in tmp)if(a.indexOf('filtre')!=-1){
								tmp[a+"_"]=`<option value="${tmp[a].toLowerCase()}">${tmp[a]}</option>`
								tmp[a]=`<a class="ui btn btn-danger">${tmp[a]}</a>`
							}
							tmp.type=this.toActive
							tmp.type_=this.toActive.substr(0,1)
							tpl=Mustache.render(type_0_tpl.innerHTML,tmp)
							
							$.get(
								"/type_2/"+self.toActive,
								function(xhr){
									// alert('po')
									// alert('ok __ '+self.context)
									tmp_=JSON.parse(xhr)
									tmp_.forEach(function(i){
										if(self.toActive=="miracles"){
										}else{}
										///////////////////////////////////////
										if(i.likes){
											i.count_amen=0
											i.count_hosanna=0
											i.count_alleluia=0
											// alert(i.likes)
											let j=JSON.parse(i.likes),jj
											// let j=self_.obj.likes,jj
											
											for(jj in j){if(j[jj]=="amen"){if(j[1])i.amen_="liked";i.count_amen++;}if(j[jj]=="hosanna"){if(j[1])i.hosanna_="liked";i.count_hosanna++;}if(j[jj]=="alleluia"){if(j[1])i.alleluia_="liked";i.count_alleluia++;}}i.count_shares=objLength(JSON.parse(i.shares))
											i.comments_count=0
										}
										///////////////////////////////////////
										i.ajouteur_href=i._href
										i.ajouteur_src=i._img
										i.ajouteur_title=i._titre
										i._ajouteur=i.nom+" "+i.prenom
										i.ajouteur_=i.pseudo
										///////////////////////////////////////
										if(i.comments){
											i.comments_count=objLength(JSON.parse(i.comments))
										}
										i.descr_=i.descr.substr(0,100)
										// alert(JSON.stringify(i))
										tpl_=Mustache.render(lis_tpl.innerHTML,i)
										$("#"+self.toActive).find('ul').append(tpl_)
										$("#"+self.toActive).find('ul li:last')[0].obj=i
										
										// alert(lis_tpl.innerHTML)
										// alert(tpl_)
									})
									// alert(xhr)
									// alert(tmp_[0].titre)
									// alert(tmp_[1].titre)
									// alert($("#"+self.toActive).length)
									// alert(tpl_)
									// alert(tpl_)
									// alert($($("#"+self.toActive).find('ul')[0].firstChild))
									// alert($($("#"+self.toActive).find('ul')[0].firstChild).length)
									// $($("#"+self.toActive).find('ul')[0].firstChild).remove()
									$self.find('ul.main_2 li .likes>span').on("click",
										function(e){
										alert($self.length)
											let _self=this
											// alert(self.context);
											// alert("/likes/"+context+"/1/"+_self.lastChild.nodeValue.toLowerCase()+"/"+$(_self).closest('li').attr('data-data'))
											$.get(
												"/likes/"+context+"/1/"+_self.lastChild.nodeValue.toLowerCase()+"/"+$(_self).closest('li').attr('data-data'),
												function(xhr){
													if(xhr==1){
														if($(_self).parent().find('.liked').length!=0)
															$(_self).parent().find('.liked').removeClass('liked')[0].removeAttribute('data-tooltip')
													if(!$(_self).hasClass('liked')){
															$(_self).addClass('liked')
															$(_self).parent().attr('title',"Vous avez liké cette objet par "+_self.lastChild.nodeValue)
													}
														alert("____"+xhr)
													}
												}
											)
										}
									)
									$self.find('.talk').click(function(e){
										let tmp=JSON.parse($(this).closest('li')[0].obj.comments),tmp_=$(this).closest('li').find('.talk_tag'),a,aa,b=c="",tab=[]
										let div=tmp_.find('div'),text=tmp_.find('textarea'),self=$(this)
										tmp_.slideDown()
										if(!this.bool){
											this.bool=true
											for(a in tmp)if(b.indexOf(a)==-1){
												b+=a.substr(0,a.indexOf('_'))+","
												aa=a.substr(a.indexOf('_')+1)
											}
											b=b.substr(0,b.length-1)
											text.on('keyup',function(e){
												let self_=this
												if(e.key=="Enter"){
													alert("il y a un probleme ici\nla fonction escape n'accepte pas tous les caractere\npar exemple 'ù' produit une erreur\ntrouver une solution")
													$.get(
														"/add_comment/"+JSON.parse($(gauche).find('.actived').attr('data-tab'))[0]+"/"+self.closest('li')[0].obj._id+"/1/"+escape(this.value),
														function(xhr){
															// alert(xhr)
															if(xhr==0)alert('erreur talk')
															else if(xhr==1){
																alert("oijioj")
																div.append(`<p><a href="href_du_user_a_inserer_ici" title="nom et prenom du user à insérer ici">pseudo du user à insérer ici</a>${new Date()} : ${self_.value}</p>`)
																self_.value=""
															}
															else alert(xhr)
														}
													)
												}
											})
											if(b.length!=0){
										// alert('ok')
												$.get(
													"/get_users/"+b+"/infos",
													function(xhr){
														// alert(xhr)
														if(xhr.charAt(0)=='['){
										// alert('ok')
															xhr=JSON.parse(xhr)
															xhr.forEach(function(i){
										// alert('ok'+i.id)
																tab[i.id]=i
																c+=i.id+","
															})
															// alert(b+"\n"+c)
															for(a in tmp){
																// alert(a)
																c=a.substr(0,a.indexOf('_'))
																div.append(`<p><a href="${tab[c].href}" title="${tab[c].nom} ${tab[c].prenom}">${tab[c].pseudo}</a>${a.substr(a.indexOf('_'))} : ${tmp[a]}</p>`)
															}
														}
														else{alert("erreur klkpart")}
													}
												)
											}
										}
										// alert('faire apparaitre une fenetre de dialogue facebook')
										
									})
								}
							)
						break
						case"guerir":tpl=guerir_tpl.innerHTML
						break
						case"confession":tpl=confession_tpl.innerHTML
						break
						default:
						break
					}
					$('#main').append("<div id='"+this.toActive+"' class='active scrolly"+addclass+"'>"+tpl+"</div>")
					let $self=$("#"+this.toActive)
					// $('#sauver_form input[name=redirect]').val(document.URL)
					$self.find('input[name=redirect]').val($('#menu>a').eq(2)[0].href)
					
					
//sauver
					$self.find(">article.sauver>footer>a:nth-of-type(1)").on('click',function(e){
						$self.find('.un').slideDown() 
						$self.removeClass('scrolly')
					})
					$self.find(">article.sauver>footer>a:nth-of-type(2)").on('click',function(e){
						let tmp
						$(this).closest('article').slideUp() 
						$self.find('.deux').slideDown() 
						
						$self.find('.deux .articles').on('click',">.actived>div",function(e){
							alert(this.obj)
							let tmp=$self.find('.deux .showing')
							tmp.slideDown()
							tmp.find('h2').html(this.obj.titre)
							tmp.find('p').html(this.obj.texte)
						})						
						
						if(!this.bool){
							this.bool=true
							self=this
							changer.forEach(function(i,j){
//REMPLACER LES 3 let SUIVANT  PAR UN TEMPLATE Mustache
//OU PAS
								tmp=JSON.parse(i.solutions_datas)
								i.tmp=tmp
								let img=$('<img>').attr({src:i.tmp.src,title:i.tmp.i_title,alt:i.tmp.alt})
								let li=$('<li/>').attr({class:"ok item",'data-data':i.id}).html(img)
								let a=$('<a/>').attr({href:i.tmp.href,title:i.tmp.title}).html(i.titre)
								a.click(function(e){
									let xhr="oooooooooooooooo",self=this
									$self.find('.articles').removeClass('actived')
									$self.find('.solutions .actived').removeClass('actived')
									if(!this.bool){
										this.bool=true
										$.get(
											"/_/changer/"+$(this).parent().attr('data-data'),
											function(xhr){
												alert(xhr)
												xhr=JSON.parse(xhr)
												xhr.forEach(function(i,j){
													let tmp=$self.find('.deux .solutions')
													tmp.append('<div class="actived _'+$(self).closest('li').index()+'_'+$(self).index()+'"><h2>'+$(self).html()+'</h2><p>'+i.texte+'</p></div>')
												})
											}
										)
									}else $self.find('.solutions ._'+$(self).closest('li').index()+'_'+$(self).index()).addClass("actived")
									$self.find('.solutions').slideDown()
								})
								li.append(a)
								$self.find('.deux>nav button:nth-of-type('+i.type+') ul').append(li)
							})
							$self.find('.deux>ul a').on("click",function(e){
								let xhr="oooooooooooooooo",self=this,tmp="";bool=true
								$self.find('.solutions').slideUp()
								
								if($self.find('.articles ._'+$(self).closest('li').index()).length!=0&&!$self.find('.articles ._'+$(self).closest('li').index()).hasClass("actived")){
									alert($self.find('.articles ._'+$(self).closest('li').index()).length+"\n"+$self.find('.articles ._'+$(self).closest('li').index()).hasClass("actived")+"\n"+$self.find('.articles ._'+$(self).closest('li').index())[0].className)
									bool=false
									$self.find('.articles>.actived').removeClass('actived')
									$self.find('.articles ._'+$(self).closest('li').index()).addClass("actived")
								}else{
									alert('._'+$(self).closest('li').index())
									if($self.find('.articles ._'+$(self).closest('li').index()).hasClass("actived")){
										$self.find('.articles>._'+$(self).closest('li').index()+'>div').each(function(i,j){
											// if(i==0)tmp+=$(j).attr("data-data")
											// else tmp+=","+$(j).attr("data-data")
											if(i==0)tmp+=j.obj.id
											else tmp+=","+j.obj.id
										})
										bool=false
										if(tmp=='')tmp='_'
									}else tmp="_"
									$self.find('.articles>.actived').removeClass('actived')
									$self.find('.articles ._'+$(self).closest('li').index()).addClass("actived")
									alert(tmp)
									$.get(
										"/_/changer/"+tmp+"/"+$(this).attr('data-data'),
										function(xhr){
//DEFINIR UNE VUE DANS LA BDD
//ET CREER UN TEMPLATE Mustache ICI
											
											alert(xhr)
											xhr=JSON.parse(xhr)
											if(xhr.length==0)alert("dslé pas d'autre donnée")
											let tmp=$self.find('.deux .articles')
											if(bool)tmp.append('<div class="actived _'+$(self).closest('li').index()+'"><h2>'+$(self).html()+'</h2></div>')
											xhr.forEach(function(i,j){
												let tmp_=`
													<div class="" data-data="{{id}}">
														<a target="_blank" class="tr0 outside boxSh" href="/2/{{}}" title="{{}}"><i class="glyphicon glyphicon-arrow-up"></i></a>
														<h4>{{titre}}</h4>
														<a class="" href="{{href}}" title="{{}}" target="_blank"><div class="ui avatar image "><img src="{{}}" title="{{}}" alt="jesuschrist.tv {{}} {{}}"></div><span style="background:white">{{}}</span></a>
														<span class="br0 w75 dis_">{{}}</span>
													</div>`
												tmp_=Mustache.render(tmp_,i)
												// alert(tmp_)	
												tmp.find('._'+$(self).closest('li').index()).append(tmp_)
												tmp.find('._'+$(self).closest('li').index()+'>div:last-of-type')[0].obj=i
											})
										}
									)
								}
								$self.find('.articles').addClass('actived')
							})
						}
					})
					$self.find(">article.sauver>footer>a:nth-of-type(3)").on('click',function(e){
						$self.find('.trois').slideDown() 
						$self.removeClass('scrolly')
					}) 
					// alert($self.find('#sauver_form input[name=redirect]').length)
					// alert($self.find('#sauver_form input[name=redirect]').val())
					$self.find(">div.un,>div.trois").on('click',"ul .more",function(e){
						let a=aa="",tmp,self=this
						$(this).parent().find('.discusses').each(function(i,j){
							// alert(i+'__'+j)
							a+=j.obj.id_d+','
						})
						// alert("/discussions/"+($(this).parent().index()-1)+"/"+a)
						if(a.length==0)a=0
						else a=a.substr(0,a.length-1)
						if($(this).closest('.un').length==1)aa="_"
						// if(a!="")
							$.get(
								"/discussions"+aa+"/"+($(this).closest('ul').index()-1)+"/"+a,
								function(xhr){
									if(xhr==0)alert("erruer dans l'ajout de donnée")
									else{
										// alert(xhr)
										if((tmp=JSON.parse(xhr)).length==0)alert("il n'y a pas d'autres données, dslé :(")
										else tmp.forEach(function(i){
											$(self).parent().append('<li class="discusses">'+i.titre+'</li>')
											$(self).parent().find('li:last')[0].obj=i
											$(self).parent().find('li:last').click(function(e){
												sauver_fill_ul(this.obj)
											})
										})
									}
								}
							)
						// else alert("là il n'y a pas de donnée, le ul est déjà vide.....")
					})
					$self.find(">div.un,>div.trois").on('click',"ul .add",function(e){
						// $(this).closest('div').find('form').slideDown()
						if($(this).closest('.un').length==1)$(sauver_form).attr('action',$(sauver_form).attr('action')+"_")
						else $(sauver_form).attr('action')=$(sauver_form).attr('action').replace("_","")

						show_modal('sauver_form')
					})
//conversions && miracles
					$self.on('click',"div.temoignage a",function(e){
						let tmp=this.innerHTML.toLowerCase(),tmp_=$self.find("ul.main_2 li .filtre"),tmp__=$(this).parent().find('a').length==$(this).index()
						
						tmp_.each(function(i,j){
							if(tmp__)$(j).closest('li').slideDown()
							else if(j.innerText.toLowerCase().substr(1)!=tmp)$(j).closest('li').slideUp()
							else $(j).closest('li').slideDown()
						})
					})
//guerir
					//pour l'utilisateur
					$self.find('#guerir_plus .badge').html("je_doit_insérer_uplet_guerir_de_table.user")
					//pour tous
					$self.find('#guerir_plus .badge').html($("#guerir_count").html())
					//
					$self.find('#guerir_plus>i').click(function(e){
						alert("RESTE A FAIRE : Vous devez accepter la localisation géographique pour continuer\nVeuillez trouver des informations du pourquoi sur le lien ci-dessous")
						$.get(
							"/guerir/1",//CHANGER 1 PAR L'ID DU USER
							function(xhr){
								if(xhr==0)alert('erreurx')
								else alert('+1 ajouté avec succès')
								console.log("xhr : "+xhr)
							}
						)
					})
//confession (normalement doit etre renommer ecoute)
					$self.find("footer.ecoute input[name=langue]").val(local_language)
					$self.find("footer.ecoute input[name=ajouteur]").val(user_connected)
					let ttt
					$self.find("#confession_berger").on('blur',function(e){$(this).next().hide()})
					$self.find("#confession_berger").on('focus',function(e){$(this).next().show()})
					$self.find("#confession_berger").on('keyup',function(e){
						let self=this
						clearTimeout(ttt)
						ttt=setTimeout(function(){
							$.get(
								"/22/confession/"+escape(self.value),
								function(xhr){
									let ul=$(self).next(),jj="";
									ul.html('')
									xhr=JSON.parse(xhr)
									xhr.forEach(function(i,j){
										ul.append('<li data-data="000'+jj+'" style="cursor:pointer">dsdfs'+jj+'</li>')
										// alert(ul[0].nodeName+'ok'+ul.html())
										ul.find('li:last-of-type').on('mousedown',function(ee){
											alert('ok')
											$(self).parent().parent().find('input[name=clerger]').val($(this).attr('data-data'))
										})
									})
								}
							)
						},1000)
					})
					
					
					
					// alert($self.find(">div>div>span.close:not(.close_)"))
					$self.find(">div>div,>div").on('click',">span.close:not(.close_)",function(e){$(this).parent().slideUp()})
					$self.find('input[name=redirect]').val(document.URL) 
					// alert("$self.find('ul')[0].className : "+$self.find('ul')[0].className)
					$self.on('blur',".href",function(e){
						$(this).closest("form").find('input[name=href]').val(document.URL.substring(0,document.URL.indexOf('=')+1)+$(this).val().replace(/ /g,'-'))
					})
				}
			else $tmp.addClass("active")
				// this.obj.article[i]=eval(this.obj.article[i])
			// alert(this.obj.article)
			// $('#'+this.toActive).addClass("active");
		})
		$("#main>div>div,#main>div>div div").on('click',">span.close:not(.close_)",function(e){$(this).parent().slideUp()})
		
		
		
		//MENU AUMONE :: CLICKs
		// $('.btn-aumone').click(function(){alert('ok');if($("#aumone .active").length!=0){$("#aumone .active")[0].click();$("#aumone .active").removeClass('active');}$(this).addClass('active');$('.'+$(this).attr("data-type")).slideToggle()})
		//MENU COMMUNAUTES_PRIERE :: HOVERs ET CLICKs
		$('#communautes_priere button.ui.basic').hover(function(){     $(this).next().toggleClass('basic');   $(this).toggleClass("basic");        }, function(){       $(this).next().toggleClass('basic'); $(this).toggleClass("basic");})
		$('#communautes_priere ul.main_2').on("mouseover","li>a",function(){   $(this).next().next().slideToggle();      })
		$('#communautes_priere ul.main_2').on("mouseout","li>a",function(){ 	$(this).next().next().slideToggle();       })
		$('#communautes_priere ul.main_2').on("click","li>a",function(){    $('#communautes_priere>ul').slideToggle();$(".publication").slideToggle(300);      })
		$('#communautes_priere li').on("click"," .pcm_last>a",function(){       })
		$('#communautes_priere li').on("click"," footer>a",function(){       })
		$('#communautes_priere .h4').attr('title',$('#communautes_priere .h4').html())
		//BOUTON CONFONDUS :: CLICKs
		$('#communautes_priere div.button button').add('#rencontres_chretienne div.button button').add('#oeuvres_caritative div.button button').add('#solidarite div.button button').add('#actions_sociales div.button button').add('#benevolat div.button button')
			.click(function(){$(this).closest('.active').find('img.pub').hide()})
		$('#communautes_priere div.button button.red').add('#rencontres_chretienne div.button button.red').add('#oeuvres_caritative div.button button.red').add('#solidarite div.button button.red').add('#actions_sociales div.button button.red').add('#benevolat div.button button.red')
			.click(function(){ $(this).closest('.active').find(".publication").slideUp(300);$(this).closest('.active').find('ul.main_2').slideUp();$(this).closest('.active').find('form').slideToggle()})
		$('#communautes_priere div.button button.green').add('#rencontres_chretienne div.button button.green').add('#oeuvres_caritative div.button button.green').add('#solidarite div.button button.green').add('#actions_sociales div.button button.green').add('#benevolat div.button button.green')
			.click(function(){$(this).closest('.active').find(".publication").slideUp(300);$(this).closest('.active').find('form').slideUp();$(this).closest('.active').find('ul.main_2').slideToggle()})
		//MENU LIVRE ET PRIERE :: LE HOVER DES LIENS
		c.on('mouseover','li',function(e){var a=document.createElement('div');		a.id="show_livre_";	a.innerHTML="<div><img src='jesus-misericordieux.JPG' alt='' class=''/></div><div>qsd</div><p>lorem ipsum sdljdisjid idj iqjqjdiqodsqijsdjsdiqjdi</p>";	e.currentTarget.appendChild(a);
		})
		c.on('mouseout','li',function(e){$('#show_livre_').remove()})
		//MENU ARTISTES ET MUSIQUE :: LE HOVER DES LIENS
		ccc.on('mouseover','li',function(e){var a=document.createElement('div');		a.id="show_livre_";	a.innerHTML="<div><img src='artiste0.jpg' alt='' class=''/></div><div>qsd</div><p>lorem ipsum sdljdisjid idj iqjqjdiqodsqijsdjsdiqjdi</p>";	e.currentTarget.appendChild(a);
		})
		cccc.on('mouseout','li',function(e){$('#show_livre_').remove()})
		//MENU FILMS_CM :: LE HOVER DES LIENS
		cccc.on('mouseover','li',function(e){var a=document.createElement('div');		a.id="show_livre_";	a.innerHTML="<div><img src='young_messia.jpg' alt='' class=''/></div><div>qsd</div><p>lorem ipsum sdljdisjid idj iqjqjdiqodsqijsdjsdiqjdi</p>";	e.currentTarget.appendChild(a);
		})
		ccc.on('mouseout','li',function(e){$('#show_livre_').remove()})
		//MENU LIVRE ET PRIERE :: LE CLICK DES LIENS
		c.on("click","li",function(){				show_modal("modal_sh_livre")			})
		//MENU IMAGES ET ICONES :: LE CLICK DES LIENS
		cc.on("click","li",function(){				show_modal("modal_sh_image")			})
		//MENU ARTISTES_MUSIQUE :: LE CLICK DES LIENS
		ccc.on("click","li",function(){				show_modal("modal_sh_artiste")			})
		//MENU FILMS_CM :: LE CLICK DES LIENS
		cccc.on("click","li",function(){				show_modal("modal_sh_film")			})
		
		//MENU LIVRE ET PRIERE :: LE SELECT
		$('#livres_prieres select').on('change',function(){
			var $val=$(this).val()
			/*faire une requete demandant un type valant $self*/
			// alert($(this).parent().index())
			if($(this).parent().index()==4)
				if($(this).parent().find('.active').index()==0)
					$("#livres_prieres ul").eq(0).html('<h3>Propositions de jesus-christ.tv</h3><li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>'+$val+'</span></div><div class="likes"><span><span class="badge">8</span>hosanna</span></div></div><a href="#">Exemple 1 internautes</a></li>					<li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>'+$val+'</span></div><div class="likes"><span><span class="badge">13</span>amen</span></div></div><a href="#">Exemple 2 internate</a></li>	')
				else
					if($(this).parent().find('.active').index()==1)
						$("#livres_prieres ul").eq(0).html('<h3>Propositions des internautes</h3><li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>'+$val+'</span></div><div class="likes"><span><span class="badge">8</span>hosanna</span></div></div><a href="#">Exemple 1 internautes</a></li>					<li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>'+$val+'</span></div><div class="likes"><span><span class="badge">13</span>amen</span></div></div><a href="#">Exemple 2 internate</a></li>	')
					else alert('choisir un entre les propositions du site et ceux des internautes')
			else	if($(this).parent().index()==5)
				if($(this).parent().find('.active').index()==0)
					$("#livres_prieres ul").eq(1).html('<h3>Propositions de jesus-christ.tv</h3><li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>'+$val+'</span></div><div class="likes"><span><span class="badge">8</span>hosanna</span></div></div><a href="#">Exemple 1 internautes</a></li>					<li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>'+$val+'</span></div><div class="likes"><span><span class="badge">13</span>amen</span></div></div><a href="#">Exemple 2 internate</a></li>	')
				else
					if($(this).parent().find('.active').index()==1)
						$("#livres_prieres ul").eq(1).html('<h3>Propositions des internautes</h3><li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>'+$val+'</span></div><div class="likes"><span><span class="badge">8</span>hosanna</span></div></div><a href="#">Exemple 1 internautes</a></li>					<li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>'+$val+'</span></div><div class="likes"><span><span class="badge">13</span>amen</span></div></div><a href="#">Exemple 2 internate</a></li>	')
					else alert('choisir un entre les propositions du site et ceux des internautes')
			// alert($val);
		})
		
		//MENU IMAGES ET ICONES :: L'INPUT
		$("#icones_images input").add("#artistes_musique input").keyup(function(e){
			var $val=$(this).val()
			var a=$(this).parent().parent().attr('id')
			// alert(a);
			// alert(e.which)
			// for(a in e)alert(e+" "+e[a])
			if(e.which==13){
				$("#"+a+" img").each(function(i,j){
					alert(j+" "+j.alt.indexOf($val)+" "+$val+" "+j.alt);
					if(j.alt.indexOf($val)==-1)j.parentNode.removeChild(j)
				})
				if($("#icones_images img").length<20){
					alert('faire algorithme pour completer la liste avec de nouvelles entrées')
				}
			}
		});
		//MENU IMAGES ET ICONES :: LE SELECT
		$("#icones_images select").on('change',function(){
			var $val=$(this).val()
			/*faire une requete demandant un type valant $self*/
			// alert($(this).parent().index())
			switch($val){
				case "icone":
					if($(this).parent().find('.active').index()==0)
						$("#icones_images ul").eq(0).html('<li data-type="icone"><a href="#" title="jésus miséricordieux" class="ui buton" data-tooltip="jésus miséricordieux" data-position="bottom center"><img  src="jesus-misericordieux.JPG" alt="jésus miséricordieux" /></a></li>		<li data-type="icone" title="etc"><a href="#"class="ui buton" data-tooltip="etc" data-position="bottom center"><img  src="notre-dame-de-toutes-graces.JPG" alt="etc" /></a></li>		')			
					else
						if($(this).parent().find('.active').index()==1)
							$("#icones_images ul").eq(0).html('<li data-type="icone"><a href="#" title="jésus miséricordieux" class="ui buton" data-tooltip="icone religieuse jésus miséricordieux" data-position="bottom center"><img src="jesus-crucifie.JPG" alt="icone religieuse jésus miséricordieux" /></a></li>					<li data-type="icone" title="etc"><a href="#"class="ui buton" data-tooltip="exemple 2 alt" data-position="bottom center"><img  src="notre-dame-de-la-guadeloupe.JPG" alt="exemple 2 alt" /></a></li>')
						else alert('choisir un entre les propositions du site et ceux des internautes')
				break;
				case "peinture":
					if($(this).parent().find('.active').index()==0)
						$("#icones_images ul").eq(0).html('<li data-type="peinture"><a href="#" title="jésus miséricordieux" class="ui buton" data-tooltip="icone religieuse jésus miséricordieux" data-position="bottom center"><img src="dieu.JPG" alt="icone religieuse jésus miséricordieux" /></a></li>					<li data-type="peinture" title="etc"><a href="#"class="ui buton" data-tooltip="etc" data-position="bottom center"><img src="jesus.JPG" alt="etc" /></a></li>')	
					else
						if($(this).parent().find('.active').index()==1)
							$("#icones_images ul").eq(0).html('<li data-type="voir">il n y a rien</li>')
						else alert('choisir un entre les propositions du site et ceux des internautes')
				break;
				case "gif":
					if($(this).parent().find('.active').index()==0)
						$("#icones_images ul").eq(0).html('<li data-type="gif"><a href="#"  title="jésus miséricordieux" class="ui buton" data-tooltip="icone religieuse jésus miséricordieux" data-position="bottom center"><img src="jesus.gif" alt="icone religieuse jésus miséricordieux" /></a></li>					<li data-type="gif" title="etc"><a href="#"class="ui buton" data-tooltip="etc alt" data-position="bottom center"><img src="jesus_.gif" alt="etc alt" /></a></li>')	
					else
						if($(this).parent().find('.active').index()==1)
							$("#icones_images ul").eq(0).html('<li data-type="voir">il n y a rien</li>')
						else alert('choisir un entre les propositions du site et ceux des internautes')
				break;
				default:alert('probleme select');
				break;
				
			}
			// alert($val);
		})
		
		//FILTRES BOUTON DE TOUS LES MENUS
		$('.foi_options').on("click",'button',function(){
			$(this).parent().find('.active').removeClass('active');
			$(this).addClass('active');
			switch($(this).closest(".foi_options")[0].id){
				case "livres_options":
					switch($(this).index()){
						case 0:
							// $("#livres_prieres h3").eq(0).html("Propositions de jésus-christ.tv")
							//utiliser mustache.js pour insérer de nouveaux livres (ceux des de jesus-christ.tv)
							$("#livres_prieres ul").eq(0).html('<h3>Propositions de jésus-christ.tv</h3><li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>jésus</span></div><div class="likes"><span><span class="badge">513</span>amen</span>, <span><span class="badge">5</span>alléluia</span>, <span><span class="badge">10</span>hosanna</span></div></div><a href="#">L&acute;évangile révélé à Maria Valtorta</a></li>					<li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>dieu</span></div><div class="likes"><span><span class="badge">3</span>amen</span></div></div><a href="#">Exemple 2</a></li>	')
						break;
						case 1:
							// $("#livres_prieres h3").eq(0).html("Propositions des internautes")
							//utiliser mustache.js pour insérer de nouveaux livres (ceux des internautes)
							$("#livres_prieres ul").eq(0).html('<h3>Propositions des internautes</h3><li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>marie</span></div><div class="likes"><span><span class="badge">8</span>hosanna</span></div></div><a href="#">Exemple 1 internautes</a></li>					<li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>dieu</span></div><div class="likes"><span><span class="badge">13</span>amen</span></div></div><a href="#">Exemple 2 internate</a></li>	')
						break;
						case 2:
							show_modal("modal_aj_livre")
						break;
						default:alert('default index');break;
					}
				break;
				case "prieres_options":
					switch($(this).index()){
						case 0:
							// $("#livres_prieres h3").eq(1).html("Propositions de jésus-christ.tv")
							/*utiliser mustache.js pour insérer de nouvelles prieres (celles des de jesus-christ.tv)*/
							$("#livres_prieres ul").eq(1).html('<h3>Propositions de jésus-christ.tv</h3><li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>adoration</span></div><div class="likes"><span><span class="badge">1</span>hosanna</span></div></div><a href="#">etc</a></li>					<li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>livret</span></div><div class="likes"><span><span class="badge">1</span>amen</span></div></div><a href="#">etc</a></li>	')
						break;
						case 1:
							// $("#livres_prieres h3").eq(1).html("Propositions des internautes")
							/*utiliser mustache.js pour insérer de nouvelles prieres (celles des internautes)*/
							$("#livres_prieres ul").eq(1).html('<h3>Propositions des internautes</h3><li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>etc</span></div><div class="likes"><span><span class="badge">13</span>amen</span>, <span><span class="badge">9</span>alléluia</span></div></div><a href="#">exemple internaute 1</a></li>					<li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>etc</span></div><div class="likes"><span><span class="badge">3</span>amen</span><span>2</span>hosanna</span></div></div><a href="#">Exemple internaute 2</a></li>	')
						break;
						case 2:
							show_modal("modal_aj_priere")
						break;
						default:alert('default index');break;
					}
				break;
				case "images_options":
					switch($(this).index()){
						case 0:
							$("#icones_images h2").eq(0).html("Propositions de jesus-christ.tv")
							$("#icones_images ul").eq(0).html('<li data-type="icone"><a href="#" title="jésus miséricordieux" class="ui buton" data-tooltip="icone religieuse jésus miséricordieux" data-position="bottom center"><img src="jesus-misericordieux.JPG" alt="icone religieuse jésus miséricordieux" /></a></li>		<li data-type="peinture"><a href="#" title="jésus miséricordieux" class="ui buton" data-tooltip="icone religieuse jésus miséricordieux" data-position="bottom center"><img src="dieu.JPG" alt="icone religieuse jésus miséricordieux" /></a></li>					<li data-type="peinture"><a href="#" title="etc" class="ui buton" data-tooltip="icone religieuse jésus miséricordieux" data-position="bottom center"><img src="jesus.JPG" alt="etc" /></a></li>			<li data-type="icone"><a href="#" title="etc" class="ui buton" data-tooltip="icone religieuse jésus miséricordieux" data-position="bottom center"><img src="notre-dame-de-toutes-graces.JPG" alt="etc" /></a></li>		<li data-type="gif"><a href="#" title="etc" class="ui buton" data-tooltip="etc" data-position="bottom center"><img src="jesus.gif" alt="etc" /></a></li>					<li data-type="gif"><a href="#"  title="exemple 2" class="ui buton" data-tooltip="exemple 2 alt" data-position="bottom center"><img src="jesus_.gif" alt="exemple 2 alt" /></a></li>')			
						break;
						case 1:
							$("#icones_images h2").eq(0).html("Propositions des internautes")
							$("#icones_images ul").eq(0).html('<li data-type="icone"><a href="#" title="jésus miséricordieux" class="ui buton" data-tooltip="icone religieuse jésus miséricordieux" data-position="bottom center"><img src="jesus-crucifie.JPG" alt="icone religieuse jésus miséricordieux" /></a></li>					<li data-type="icone"><a href="#" title="etc" class="ui buton" data-tooltip="etc alt" data-position="bottom center"><img src="notre-dame-de-la-guadeloupe.JPG" alt="etc alt" /></a></li>')
						break;
						case 2:
							show_modal("modal_aj_image")
						break;
						default:alert('default index');break;
					}
				break;
				case "musiques_options":
					switch($(this).index()){
						case 0:
							$("#artistes_musique ul").eq(0).html('	<h3>Propositions de jésus-christ.tv</h3><li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>afrique</span></div><div class="likes"><span><span class="badge">513</span>amen</span>, <span><span class="badge">5</span>alléluia</span>, <span><span class="badge">10</span>hosanna</span></div></div><a href="#">artiste 0</a></li>					<li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>europe</span></div><div class="likes"><span><span class="badge">1</span>amen</span>, <span><span class="badge">12</span>alléluia</span>, <span><span class="badge">1</span>hosanna</span></div></div><a href="#">artiste 1</a></li>					<li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>amerique</span></div><div class="likes"><span><span class="badge">3</span>amen</span>, <span><span class="badge">15</span>alléluia</span>, <span><span class="badge">20</span>hosanna</span></div></div><a href="#">artiste 2</a></li>					<li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>asie</span></div><div class="likes"><span><span class="badge">13</span>amen</span>, <span><span class="badge">1</span>alléluia</span>, <span><span class="badge">16</span>hosanna</span></div></div><a href="#">artiste 3</a></li>				')			
						break;
						case 1:
							$("#artistes_musique ul").eq(0).html('<h3>Propositions des internautes</h3><li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>afrique</span></div><div class="likes"><span><span class="badge">1</span>amen</span>, <span><span class="badge">5</span>alléluia</span></div></div><a href="#">artiste 0</a></li>')
						break;
						case 2:
							show_modal("modal_aj_musique")
						break;
						default:alert('default index');break;
					}
				break;
				case "chants_options":
					switch($(this).index()){
						case 0:
							$("#artistes_musique ul").eq(1).html('	<h3>Propositions de jésus-christ.tv</h3><li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>afrique</span></div><div class="likes"><span><span class="badge">10</span>hosanna</span></div></div><a href="#">artiste 0</a></li>')			
						break;
						case 1:
							$("#artistes_musique ul").eq(1).html('<h3>Propositions des internautes</h3><li class="list-group-item list-group-item-info"><div class="infos_li"><div class="type"><span>afrique</span></div><div class="likes"><span><span class="badge">1</span>amen</span>, <span><span class="badge">5</span>alléluia</span></div></div><a href="#">artiste 0</a></li>')
						break;
						case 2:
							show_modal("modal_aj_musique")
						break;
						default:alert('default index');break;
					}
				break;
				default:alert('default parent_id');break;
			}
			// switch($(this).index()){
				// case 1:
				// break;
				// default:break;
			// }
		})
		$("#modals").click(function(){$('#modals+div .active').removeClass("active");$("#modals").removeAttr("style")})
		$("#modals+div button.href").click(function(e){
			let d=new Date()
			let txt=$(this).closest('form').find("iframe")[0].contentDocument.body.innerText
			txt=txt.substr(0,25).split(' ')
			if(txt.length>3){
				txt=txt[0]+"-"+txt[1]+"-"+txt[2]+"-"+d.getMinutes()+"-"+d.getHours()+"-"+d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear()
				$(this).closest('form').find("input[name=href]").val(txt)
			}else{
				e.preventDefault()
				alert("entrer un contenu avant de valider")
			}
		})
		$("#modals+div input.href").on("blur",function(e){
			// $(this).closest('form').on('submit',function(r){r.preventDefault()})
				
			let d=new Date()
			let txt=$(this).val()
			txt=txt.substr(0,25).split(' ')
			// alert(txt)
			if(txt.length>0){ 
				txt=txt[0]+"-"+txt[1]+"-"+txt[2]+"-"+d.getMinutes()+"-"+d.getHours()+"-"+d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear()
				$(this).closest('form').find("input[name=href]").val(txt)
			}else{
				e.preventDefault()
				alert("entrer un titre avant de valider")
			}
		})
		// if($('#foi').length!=0){
			// $('#livres_options button:first')[0].click();
			// $('#prieres_options button:first')[0].click();
			// $('#images_options button:first')[0].click();
			// $('#musiques_options button:first')[0].click();
			// $('#chants_options button:first')[0].click();
		// }
		$(".modal_").click(function(e){e.stopPropagation();})
	})
	
	
	
	
	
	
	
	
	
	
	//LES VUES
	// changer:create view changer as SELECT sauver.id,ajouteur,titre,texte,type,date,langue,_href,nom,prenom,pseudo,_type_,_img,_img_,_titre FROM `sauver` inner join users on sauver.ajouteur=users.id inner join user on users.id=user.id
	
	//dans cp, il reste à rajouter les publications à l'onglet publication (.cinq) dans div.publications
	//remplacer toutes les requetes ajax qui ouvrent des fichiers json ($.getScript()), afin que ces fichiers soient chargés dans le head du html....ou qu'ils n'existe plus et que la fontion $.getScript soit remplacé par un $.get qui charge les données de la BDD