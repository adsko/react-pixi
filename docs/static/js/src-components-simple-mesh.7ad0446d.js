(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/SimpleMesh.mdx":function(A,e,B){"use strict";B.r(e);var g=B("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),E=B("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),C=(B("./node_modules/react/index.js"),B("./node_modules/@mdx-js/react/dist/index.es.js")),i=B("./node_modules/docz/dist/index.esm.js"),o=B("./node_modules/pixi.js/lib/pixi.es.js"),n=B("./src/stage/index.js"),s=B("./src/index.js"),D=500,w=300,Q=new Uint16Array([0,3,4,0,1,4,1,2,4,2,4,5,3,4,6,4,6,7,4,7,8,4,5,8]);"undefined"!==typeof Q&&Q&&Q===Object(Q)&&Object.isExtensible(Q)&&Object.defineProperty(Q,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"indices",filename:"src/components/SimpleMeshDocz.js"}});var I=new Float32Array([0,0,.5,0,1,0,0,.5,.5,.5,1,.5,0,1,.5,1,1,1]);"undefined"!==typeof I&&I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"uvs",filename:"src/components/SimpleMeshDocz.js"}});var c=new Float32Array([0,0,250,0,D,0,0,150,250,150,D,150,0,w,250,w,D,w]);"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"vertices",filename:"src/components/SimpleMeshDocz.js"}}),B.d(e,"default",function(){return m});var a={},j="wrapper";function m(A){var e=A.components,B=Object(E.a)(A,["components"]);return Object(C.b)(j,Object(g.a)({},a,B,{components:e,mdxType:"MDXLayout"}),Object(C.b)("h1",{id:"simplemesh"},"SimpleMesh"),Object(C.b)("h2",{id:"props"},"Props"),Object(C.b)("p",null,Object(C.b)("a",Object(g.a)({parentName:"p"},{href:"http://pixijs.download/dev/docs/PIXI.SimpleMesh.html"}),"http://pixijs.download/dev/docs/PIXI.SimpleMesh.html")),Object(C.b)("h2",{id:"usage"},"Usage"),Object(C.b)(i.c,{__position:0,__code:'<Stage width={500} height={300} options={{ backgroundColor: 0xeef1f5 }}>\n  <SimpleMesh\n    image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/placeholder.png"\n    uvs={uvs}\n    vertices={vertices}\n    indices={indices}\n    drawMode={DRAW_MODES.TRIANGLES}\n  />\n</Stage>',__scope:{props:this?this.props:B,Playground:i.c,DRAW_MODES:o.d,Stage:n.a,SimpleMesh:s.f,uvs:I,vertices:c,indices:Q},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSD2C1EUAEEAHUAH09R1LUz2cVD0NldoZggLAIH_OBcIg9hnAIVw0gY91JDgARyCE3i0k4_D2Cg5w8NgPV4DxNCjUYj1hNE1RsEk9VpNyVg4CWVgMhiBEDM4DBYngeiVME9SAXTfQ4EkWTfwUuA8C1U4cJVVA8J0wNJQE-UzXaMFUF0FFji8njEixdhuGk9YogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBndKABZcvYAA2XL8vWMBgIAMW9aBEnS_hnEOBEHUwGChH4JYiGoSg4CKhE6urBqaFkrDLnYABGMqCvkMKIqmYi5ni9gIyg8gbCgdAw1Qjl4rEbboxkdgUVimBuGAbCYqxeQtxrYA9ugQ7ggAMi-8ZEnmShmneg6ju4MG5TAZDJQGVB2nYAB-DYPrDCMTquYHPtQFbqykGQqzfMwYR0zAwDCKAplR07zpxjbl2rBMAoIHBGsyFIrwIF6a1rHi-O6HF0AmO6AFYMoytDNggFJCDupNRbQygZm7VA4DuqCPAlbZELaDBHCgIUrgymoYDAeawCF1DnpXLnGBcskYDcvAra5rNeb4EBCFue5HjgJNzTyc0RngC0ACYcG9VwsJ7EY4A-SIhI-dAZlQHABkkKqAE4kyq-bg8kMkJRgYYDoyHAk8KEAna50J9Lu6u4Gx53naM4VLJV4Bm5M-AG8bmtVFbu6-9M7ue-OTIRj1QE7qIsjKOo2icEsEUGmIgA5ABxAAZWjh-dzcnakHm0k52tJEZ5nWfZl6pFp_GzC_EA7JRXnJE0jQtAoYD9AYPz7UZoLTUVLaHSUFaZQFiNEGG1k3RMRYmxTQoVfJcWggOSw_0rI2SYgOc0BA0EcSAfaNArBXD9HcFKaBYAPCaEkGAjwL9UBEJITQBBP8CLQRFDqaCzhyJagaM4aCG9iIAE1yI6mvAAKTPPYSwUCMI4A9OEaATl-wKzwYgqSUE0SoF8jOBoqBrxCGjhkGRqkPSbCgLCVRLDdLQVgY1CAgQjjKWgXIyQXRdDkGgBkZhXEoJoHUFsbUMBWAREoFAOwTjZEeknF4_BBFabIMoKwLgRiImqTzkIJJU4EFmDWuwVAwgZhbUptwM6wBsZmGMKYcwRh2DmjqfUhpjSmnNJac0ooNTD7dD_muagLoIx5G6BMWw5kJyaktJEN87AqlTPYAAATyLzdp7Sua5NpkUk6JTqYzOdjbcSfMuCC2ACLMWyyR5cwllLAgws5anLORYBWSs27sHVjsLWyF0C631uwQ2YAwCi1FqhW5dzqAT2Qlc4AEZRnhi6AIJYcR6H-HYBs0pQK7mFmVqEv8esUiPmgg0AAGg0KFU4MjpSWNEmFkyaloprBFTFOBsWPnsO4Ihdh5wwHZmS1YCK4BUppRbLc1KLBUuWa0sV4qJXmnabyf04VqCRWUTMVB8w7AJWAOsR4xx-R0HyPK9Y_MJhXASUq3BOBUChCIA4gqFgLmECNSg015rLUZAKhqyQeZoBQFGQQPo5gKWgmrCC7WBB7UK2VfAHAkNwrWr2KgAAqqgIaYLQ0mpVZGqGrrqyas0eMWI2wjHRCurxYU8N1iZDACm8NMcvChMzRYbNdApyFgcpmZknx1yZjAWALYiRyCwA2O4NIcBS3VgpTqVAPSMwEHsH4Gcc1jVVpwDWqAdakYgzoJWx1gJV2arxYSvYisYZmTgEEa4twHh51gZoHAJwRioD1h2aQQTpCnCcnuhoOBQHgKVvgYgUAmSHvlZutN7lZgwB2iuUhEB4jQfuH1MNprl0xosGECIPNhTAYjUhlcBq8CYZjk6q1K5bUhvg6miNhGXUrlRO4UaxD9D4aXcIFdK5-zwAyEZLUY8CjXlCL80lZHF3YfpqMuAoSFHUEY5R2FK4GoiRgMynljHhNcxeZrJCOtQlfIXY6i1RGRN9vFAIa8xshQwDFNC5TzHkMTm1ugGxNQwlWdrbJoUCJGr4uIsRZzLGROwBSBKNqgnEPWdY6MDIyDjYXHCvOh1IHUQFBs6Bro6BLB5oEzptNKmazJeyBvSgHYMtxaw6F2VXNNVJJgGMYZDyYbxCWAMzgzRlGZOyCuSrIwrgRkVWZRVK9vQwDhY6XpNB-tHmRYlETFhcnzi2j1gA2n1gbABdJ2EBmgRlm2DBK7zjZoGyCddVU2axdB9QIMrzsd4WEIcQ6DNAozHYsLNtAT8YuA3YAACUsHqDeinWUXg5foGzXNii6KIWAnIir2C8F4MUDrMPih7GaDg-Y7AAAkwAUcwHe_OJQV1QhzDAbmCI6O3rDanWNmAeOYQBNzAjxg8LWVnQB-zBHxQnaTJrEodY8gOTLVWvKqYJMyYEGNaqybFhcNXAAByixjSRq4VU5dMlQKCmgVx8kKxjdQBNSb1d5IKTG8tVxUQMiN42jI47J36BnYOuapvBtmHKc6LAUko3Q2ZKeP7_gxfdYHLyiX6LIpdBPQIIyOQErzbkTgHUlCAk4HzYkOAfuEMqr5-waPsf_GSgTzAJPEY2EcK4TwvhAjhGiIkVIjkq2Lund9ewLP8fE_J565ziwkboC0AEN1qmABCEPHHsgp3ClAUI5RuscjbxnlLoQEQRgjPEFdfYBwTZ2hnuRi-liLYHMtq4C3FXLeOksMpb5nd9v8HYTp0IsAgXQHYM-1vMxHYsORRniKErmoSOsWYhSP-hC_xdnGivM4MRI1GeK_uTvoKRJ6mrgQJTM_r3AiownAZotoikLovoqMKHqjEsMUIpvks2MGtxHsksDiBgKMHsHHoFMMgQccHts6OgMUJzs7tNpATQFqFwLAfASuLklBEGmCqQQcngEsCRksLVvKuSq4M0GhAlEMjHD1mFFzHIWHJtB_lVuwF-nEErBBsdpqpYNRDqFcP4LsLMmgLAGOM0IHFdMMP_jkENEZPiMMiTuIcrMvioiEHYO-lFPACOo3LhsDr4DAJLIQAER1ibgSDgK_iyv4AEdHi4QZCuLzooTWMoT_jgCZPmgIGHOEJQOhlMAlKTGEoyBdhYKkXMOkelgIPNuWgjHKE_MKHDOlCiArO0MtqjMkaUREXrgQCvICFtA5hAHYg4h8KaLQI4DQK4Ptt3mUTMDgE_GkFPgMUMSXATugFkOMbxFMRGMoV7vtJjDgY4THN0b0ZgEsHIQTCJn4gElqEEiEmEu0SUbGlwTMVPsoRSp0g8RYCwc2h2tqFwHGjMGsbQH7kEmLqSF0KwDzLQOCUEhsdgAQIdjwYLrpP4YEcEQQJIdIVtMoQoY8ZqrOugP2iHhALNCuOtttGxqwGLvgEEZcuwL3uDCRuwAAD7MnL6gn-44C4b0ngy4aInHYzGhgW4wpCn5CzQRiokkZT7fH1ruoElElSEDpzpkkbaUnUk1EMkJTlr8mNyCkZEZDVGKmIztD1EvjsBNERAzCtGfFc4dHsD4mVBEnwDiZKwIx2mapgCj7uSGj2IBpcxLG-lZGrHrHASTHOjTERG7HIx0AHHKHHHbqHGvERHvF7I2nfFRnrqoDcEGbIm7R7FHQyGHGlz-4rh17na1jxIZLJJHDg4Mh3QzHPRvT5l0DyDXxzAJKtYCAvTfHtojZ_EfLRB7SbYCBCCwrQgjlCi6INQ6m0ryr0oZCjkRjFBngTlHCnC9Ajm5hoDQ6w6dII44BMFIkYqwA4ALlCjDmjlT50onlnnd63lTmUDMHJEpm8zZkrK5nEqW4TpsHTqzppCYn0SyERG4kqnbT96Kk_SfkCBW4_m25zozlKERFpH-pZEUrbFIXlHzEwDSk87JG9lTrQEJC67BpvkpHAWck66JokUvF2kBnDHBljGhlbGf5L5xnBonGDaJnUbJnCkfFJm2AqGzHlCoiUCJBpnPnCmkWsHKwETxGAVFkgWXEbZyWQXxE4AdYIWIEMJ3ZwFqUdbmSvYIjvZfY_be5wAs5A5yh6UQDqFth35DjPKIjsDFAmW_bRHmWXj6DFCvhOxlnmAsWJF2l-W1hv52DADR5e7uW-44n-4choRdBgB3TkBUzoUCVRE8pbTkBxX2ndlO5hSdLFmp5WQJSKpVpmAFXC7_6i7-5bSVXkxi5hREz2h1VTB7moD3x2SvzsSAS6AgQGBgRWJQSWCCLQS0RLADGP5TCpKCQKJhKeieVMKxK6QUrGKCQUreJSRX4YJqR7IbXAIwS2KBmrXtBRJbDUAeKwACB7X2hQRwk34eEaFzB3UYmPUzAdnVlLC0zjH0hHhjn5h4ADFrLTUnViTPwtbVnXUEQDJpY7ANYnpA1BSmLCDbCqIVImCiqSqY1Y3LLQRvBgLJXER4oY1Y0k1irSqNWu77UUpLCdKCETCA1zDjWwKTVM2sTLGOKEyU03WvXvVTifVPXyoWouqvXPWAou7qK5Anow3bBw0wBA0U1SS5LXgvBRBKrwlbTDWjXOA4DK3ECzCWDwmc2K3IkbFhlGIJSa3zym1TFG06S5JryZAzA2BnAa0jXzwO2zDO1wC232i5Irz7bOD40wCwTuDdAW1u3a3-3OiB2WQh3Og-1TC5LQTEImSwDW3hmu1a04DJ0tyGbp0BpNWJ3InOD9gvBh1WAR04Al39C0AJ1B5TAG33Xh1Z2N2iDi123IlpZgIzjV1l2Z3zxd0FC9213t2-3F1yT2yKT93a22zySKR125Kz3mYKzl2W0z0T0igr13xKAPwiT2S_FORL0OyeTkBYTdXaC9VfxgTGDQhwDd0WgsAVAeD9o8gC4yV5hbTHI5LIl4gJSywZQK0d3v2DzFV5LqFxpoAEDzRVTEQjnwQRjzbrAZSKBJiKBLTQ7VjIPzRoNLDrDYPBw4MYMWAENLRCy4PVioNLRVTkMWBUOKAADsND7AS0jD0uTDpDigbDZgy2Fxhd9dek4uzoYwjUD6BASYwcsDmQYliDmDSwyDdyGUOAZD3ySwZy2DKjSDcjSjqjjcijyjejOjzs6jBjmjC0hjuj2jZjdy6j2D3DvDXNRd79HcrcW0Qj7AIjBWYjEjcD0jmj8jfhkgBDKjPcIwcjMayDeAgT5jIwUTvgsTXMoTcTBDmjwhITsTqTfhIhBUPD29ygdks1SinJAEF9n8oE4EUktg_tXqGCesax7kL8cAVTkN5k2lpCQUFCVCNCdCrTi1ai-1rdfQnFHBo0cEiQjegUwNzErE7EzTUEQS-gH2jpGQx6o4AAavEAyMdR6FMxALMwbi9X4HAAANJ55bOmLzgWLZKj2OORT2AfYNAbxERngrxbTtAYxhgIKVLLJiih7h5uF3BLLVJzJY7STjMEANyv3XP8OF6cLkQii0RngiirNnhahbQIHzZ3MPNPMry77jBoiO6FT0b64O4xojBCgHTETmJ-Am74ukvkupaZDKxyZEA0tm76r0urO2D2KwCssEvO5fNAs3GkxVVaojPwSUHZ5TC4kzLOCnoex3AXrPCvDvCfCSBECxB-B6x7RRCoCuJjI7PmiQAOKSDP2UC0KuBlRVCdiBB_K_IeC2tCxVRJjkBVSWuyz0NVRVTijBzS7Bx-uuBCzzTihCR709bsQADEG86cgLMysyILwAYLELMqfDSd7CsLJe_CQiIi4iki0iaq3-VLrgVwtj1YHg4QEQqugIVwhRJ6MacQe0ctcAutqt1b8Qtb6wG5YmZYeS_-vmFgkA5MGQsD4oGuvbMaA7XecGLF8uLww7RbPbCQMakDGQZobAc0NbBLFgUQcA2wo7i76wzErAIgBsMago-QSsJ7Zawprgz99utLZaIgECkmGj1YcAcQPLZj6wO7VWl71YNGTLQoLLC7fb7ASS-Qt7vLMaWAv7FgQWyDeVsqArMyH2FzRis1hoQohoo470M4-Igy8JgzAk0rNSimjl0IuIRitAN-hHmH_Iiy1SyysyRUmQsowAKI04KQaE7K7M4ajHzH3o0k76C8BHXQzJu2kADBaEVHZ2xRsb_HrH7HBQYn4YEn2QaEdHaQfHxCAnwAy64oqAynJM-26AaE5AQgcAXbksaAjHflYVQnAzXQSbC9yJp4DnMALMkQYuRS6w3H-g4aMaUE0nhHO2KnxnSwGn5d4nYXPQ5nlnqUW0UXDBYtE2CB5JEYEXmlN2yB2xaC72EX8U4MJpCWM4-U0IC1BA4a7AAA1HKC7PxHZXYCToECEEWhx0sCkCIM5QAKRwDeVnG5fNAZdHmRTEIpDi7zYRc17lbur6G6jVssSHHhdTAnocp2BmcjRxfbk0GdcTDdAnq6A5CjdmRltjjmBqUh5dTwA6iAbKwjEbdChWd4kzcGFXA1dyH7N4expJAHqumuB0EcBku2FXSjiNCpAMgWegURjrcWcPepSaUoYpTyF5B4BQ-xew9oA4UibBVueRoygRjR5HdPkXZZc6XbEifdAva8RvbNBudLC-c0CVc1dwxBddBgPZCNfDjNdY7vbFD2fk_eWc7BUs_FFn7IkTsRY1Uf4iARiHMnPSOZ5UFMzN4F5ptcLwvOCIvItajp7R7zM0CLMYCXVwA8MXFIc1KgLJAtX_N2DMjDP5zJBgsGVU_dQSnO14j0YhAJA_F9m8oxs1JMfaesdCd2-jOJtO_uAIhacseguK_ywHQNVAsB_R8Jux9gMjAJ9TLJsOOGhQy_eE6JBCsi6-6U8R-cWhL2b-5LBCNi4zkk-kIPZcwh_wRguFURBY4pxwAJJt9oI6hgDpcyWl984rjtAl8xZs_2VNeDIDfOXB-2D29gvFBLBwxM8ddTDFA9d9fUbT-j-R_VgXGym5CAlZDQhGSZjynLPrBpe97V-cmSz5JdBnin8EAB4IHSWRSHNij2EwAby2AgTm1_QAxBuA_GLEKS_4_8UQ6QI4Ntghi58YYCCd8u_UObjpsS2_YAQiBwDMhoB7Qd3ErCuZcw5M20cwpwC2gZQlQxAxgCfwWZLMBAMcWADOAmBkCIAVXKrvD34a3EtoevAgAb0JLLMJuU3Z2Gl3L5i55stxQ_JqTT7CDRBrA67Btm57NAhB_uEQcEkPxYCcBcA9gJBQ_4cpEk3_X_pAOkGIFDKf4LoGAL0HhlNswSMQvH0UFSDK4YtEeGlzkESCbByggrglGwGwDqAcMTQf4HHQGDrsaAv8NQAsEvUb-KiJQQQByaPZ7Bl2QKtWB7LIkwhMwOXuLhb7K8khdgVktJCSIXYHSAgHIDoIEAjAa6iIL3j1kRjworo8wXMATj7AZBmWpfS_htgyEYDm4xQsujX0Dz9tMOEYIgRABIGMDawzghWCkIZR0AUgDAzgMwNYG5Jf8ww5IXnjgB8C1sylaweEJmBiDwYGQxbDwy6HOwT0BAdZqPnAw79OKMwKvlVmEEbCp8XxOIVzD8q4ULsswyXvMNGHi9u87wmvskQIG9CQe_QhKKQPIHW8xh9AvAIwOmF7DnhCsObIoIgD8C3-UwWsuXW2EH47SV_SptAAjBIjJ8ewg_gcNA4bMKezQIzgwSdgHCjhDIfvkYPBJa4CRxw6UmVxPRNYwKGIqAFSOd4wBt8CsXYZBShzbkYWxeXhJm3Lw5sq8uI-0u6mGR_creSI2WviGiBOxryf4EYMQizLFADhMQXDjKMJFXAMciqPHCpF1HABThXIjYVJ0oBGikRykIUIv3D4xYbhwPQ4YSPZGl8aR5wmCKr24RCiy82bSvJYFNFRCuYXHIouKKVFclVRS5O_g91w6KojR-opYDZAxwmiD85o0nFaIw4CBbRpwzHrcKxi5Nd6okMxBYjoRqBz6H8PQGUxTbIlbAjUTweYASj48N8iPCbEd1PLNwxKHATZE4M7GFc1BXg-xsbWAZwBHeCUM1uoCpgt9lE3feYOkVyLFcUgHwRfBGDHEbJCu82McQEgbyK9lsVzKsYgP8By9MqoSWAB7nrEopqwRAqgF7wShXiTxSsZIlf0kbwQO-T4sSreJxGv9mR6XYcYryh7HiAkMMD8YqOPFbQ0hiwv8QkAAnUAGR84JkZ-M6IGI0-7AFcouTeb_jTx4_DnmR3cAaEfGewI4GCx8oiZu4CQ4BuGB8Bqpu4t4yNEKDPASgUeieKmJ-NfjzZE8KgvFgyB5z79vU9eRiV2NQFqBWJeeTYe4MS7ZAEEzuPcZFFoIJRl0jUM8dtAJ7Ni-8ckrMkpLG4DigGweZCGgQwIGJQ86yKmNeGYz6cJSqgUYG-A6p703E51TxAIBLHYAyxQECsf1XKb-Qzq4UOyf_DGQ2TPJl1ZpjME1iI0PQLiMaNsF5jsQvBS1YYCiF0CQBZw21SQDFIIBxTJYu47PknUOoOItoYodxHZJl4jQUp1AeKW-CklTBkWIoZwA0B1AvMSqmsdSssxhjOd360EYiPYCObEQ144BFeMRD1Bng5s9U1AANnzF2QKUDkt-D1VKauSrEdfTMBgg6ZOQums0l8EtVupMUM6kzWBDM1WkHU2agZcam1I6ldTyIPUvqUsAqlVSapZzPVnlP8lhRNU9bTYLZk669UzaNA5qcHmfCCN1CeoWYA8TRrTISOeQCILKAswkoBAyyONEyPe7_V9g7ARmOaGDB-85k8naSEYGDGA4aAUfHTkJ3zoCBTO60oxOl1PL1BduxBXmHyiT46dax4UJWKZ0XxqZyaULPsX6kkr08Xqr0qYnCgZkawEuoXBgrXyQKk8VweM1viIDQQd8u-4s-YL3z_ETEpiQ_ETO0DBwwZDuKUIWpmFKCEzMxdPV3LThyCnCkcM_AlB-jxl1B4BSKZIkQKECdctSX0k8KODlmbFwynOK_jbIRJ7DNUp4T7p6WR65gjWRiTmeGVLLPh-iWUkuGZ3FCMV5Z5goORkCnzuyY4Bwp2W9PJTPgiebqK6A23QD_4rIf3S0uwFgBGQvUDFWTrtMGKBkcApcvGZtnK5pyRADWfmdkG5kJA1M3EzVFcWoI0BhwACIXLcWYze1qwncwJMEgHn_Ss07qIXk9Pdl2jd-FgYKnRRLinhcaz9WIJvREC6IjBEYd2afnuno0gWuiSVuZBJx_wbio80JIPMz510WZ5kSVmfLuLJ4Zyi8rIsPN0QRAz5lgMeZ-LLaG8YA4aPfEIFMgxw6ArAHACvDnjkRnmqzHku4OUQ5zTxcMRGPNHNIvsuYzcXVGlHYAXTqpK8GzChWTo7BeYlOI1IdM6ndTepZ4GzBJ3QAfZCpm8jkbeHZpGpw5WRahbQpRD0LXRXEhDlZNEhYV0kiSask5MvplMrEf8DBL3Kua5JRaCUM-JHJDJ6Ab8EYFihcVWTtkqyTaBKM9WzoaKA0aimYN9SFpQCHQiipmIYt-pv1Io_1BmnMOvAUhJqTEjtsiWKE_5_-Z8OTCqPyFig--KeO4OSmNir4VwjAL6oLV-piBgAP-KmIwDsUnoHF4VORD1nirGw7oCVNCD_jug_40Im4VspIBCXKwjFL0SfPqkdqwgb0c_UZpTi2jFBrFJs2mBGAxwxKFMP5MpWK0SCVKshjSyamagGy852co6UcPXhcVzAA0kk7PlBGsWwJaY_NN6rorHJ5KfqwtUWtjF4WSACm81TGUzGKbli-q38LiMtPaaUJFp9ibprdlITNMuAPgDBBcr2Y_4kghfKql52BrbN_czTGpIinwqORgp-9H3lczN4aEiE0AG9v2nEgAD4AyMuNmghj6SsnOULXJGvTRbrBm2-teEulCRVq0b8E0CwHjPSh4zMV7AD2k7ViBwZ2gBKr2niqjowAY6CIOOnNHaAUqqVwdOCM6DxU51U6TSmOQJnaCsrYgadbWXiuHq0qBVeK1uulFbrCroAQ9UurQFFUSqe6UqmAPyonoOx0oR9RSIqt_Cb15gKqjeivQmii936Z4LeH1JXiWA6ICUMCfnjXocghS8C8DLXI2VmQscq-KCLr3K5mR5sWOXFh8poBLDPVR-bIab33kzJD5m4rHJfMBnAtIVKfaFUzLKkV0ta5EBoCvD9Eos0W_LINSR1GI0gyuGy55BSAKHmAQVWOZZC5EBVHAScvc8ZNaDsDFA5FWaiyvdg5B9Kpk2MhTvOKk6QqG1UwYtYn1RnRqAkaEHrA6BbRSsSyvawPlCoHXPTRQoc04TZwGXnY7OJsnAEYEM70E1Osa7PjfPkW0Au1OXeYG6PFxlJ65-RYDjOVyRgB6xyEo1c81NUeq0ENedYH0MCFPqQetyxIAnyaHbQnBl6twTANplwDMugQraJeu3nPhD1GcoeRtl7zZjPZ7qWgg1HeThdGumwVnkiFvn6yegwM40N6oIC-FZyZEyVrmGbq0RE1ya3Nii3vXzB4RX44eQdnFGGyEodG9ACMSjngZW8a2QIWUvQCwEtozG7jbxsRj8aWAPG4NEulUAuj7RKCsSegE41GCuSnqYimCj42oAiNLGnEERSorKahNqm_WQps03dFxNGASTQiDRi5Am5sm47KcMEpJAvOTG3TZKCHzvqvOOmtTTZo_WckPAEm2DVcBk13Cxamc99eZBeDQYvUPWXvF-pM3YU9hzml4Rcqi1LByIVMciO5q-FKVv10_WLe4XEEeCAN_Y8UVlsHAJR319y-qmOqDGQZ8-xfQIcfjxwcb4hElM7LSBfV5jEOGahwFmuHW_FwVfaxTjOA7XzBW1k6yUGhC7Q9pDM7AI8BMCcDhqs-buOseXMmr7rOKY28gL2lgCCyemcBXvL3ixxL8zweswKCC0n50FVOiwVIJ13X69dSuTqy_kLPr69416VGmAMtiX4OKrtiOKgED1oLNcd1zcz3qaHQDJBsAv_OwNuSt64aY4N2tBNxLXpkaU1WoZ7exNW3rbiiV7JraCp4U707IwwSgCjXGnCKppDAPhjUkSnQ080CCEnYjVWXw05gCCFZWsp2aE6XJuyiWtBEoCQMlgseX5kCuDoc7Mwm06ZvAiWr7L5phy6hMcuWnnL0Aly6BNcpF2NNoAQUWpv4Eiasjfl7WnOkyK8KChIGdIzZiTmIRSMjZVAIUCVCyDhqhtwAdGfrtk7-9bO0kV8TCr4Y3zmOJ6dnZAyxGEiZyRAo3VtHmyPqoNGWwAbbr_XtAZNr4PYcFSN085GRRI4PdjmaBIiw9fWlIJHs_F-6EoSIuYmSBeCPhFAREr4nHq_HdjCRYe6TOnsgwjl_dSI_gcGKZFpdXxL4nxl7vpGaVM97AKPHIlr2x7YJ8e1vZs3EEsUNBv0UvccLD0bjFQmlXJBRM4Ay6B9nFJLZshS1YAToWQgBjmXfrJAmN8-2UewCX1nQUtiQNfWyQ31cwO982EkC0Dr3F7Px0ekco8PR314jdHeQdt3l_xnQYNiutkTMBOiQUv9_WFeBPmtWq0IwK8PTPHIQ4AzlkNxLvOq2dCh6nCkK97B7tbQESPAPO29qgbboys5WNwBVo8CVZ4A2QqrdVntHiCnA8AOrPVmaHNAGsA59k01ua0tYeBrWxsDKHawdZOsXWbrDKB6y9auAfWfrYOAGyDauAQ2okAphGw3hlRpcPWiddbrQhIj51TWsKnp3cDO6t1C22wNgfDQL6ZywVZPacJQP86pgWQow4EPezc6OMvO7A1Ad1btbH-Loc_u9IY6J942qegPZocHGRROB3Ao3v7vWBvN8a2wPFe0CTQnpb0sMGNOEcGDaCjIYRiI9jnCCJG4jhQ1IwMgJwZGT0BOfYPkEwBhHeIVpGIxEFnx4BTShRtoNqx0GVGyjjaWow23ILhB8jCqmI7rr0AiRS-UAMI-0a7z7AejphjIOkbaODHhQswAY8u3yGjBojQR3oxkCyMjHJjuR5o8kgmMdGv-YR_oJcj7QU6YjWxwgFEc2PokFjQR_Yz6kFArGCjJRqo3gHhQIhuj1xuo00ef6rHHj1RhI28fKPFoXw2TPeRGtlaIiy9zIP7rP1aVgsS1eBz2Iq1ZAqs44DQLCFhDo57QaDkoOg7AhNZ6xzWwcQNunCqjYn5orgeaEmGyDpwPAHgeaNA1cDS4hYHrdAJnBgDpwwACICUCIcWh8K96jMITpoEjYUmyo8h5PqCfn6p851465PqnsHUDgrdNu5Q9Ujm06Qb55I50acLdGGRvdgeNLjodMN6HkxO-P_b9E1OQM9D2IzSg9IVjJAZTXMHU9yNjgzBEgHnIgPod70hiNTnfLU2gii0BigJImTVG7u6BGHmgf3fJKgHNDYHQVnAAIEEVw4X47-xOYcCCdMOY7N9kUU3fkLQAW65sxCd3aYcdOPFlpDfZ2E4JTPm7aAdgHLRHpH2FgzdaZksyCImF4gzoWUSCkWerMRo6BdZoYagydjtBrA3QRVMZGSAfbwzLXXnsuuwOI5MOI5wlDHgwM2GsDphxHJUEm3AyyO-Iw3c2iiDmgT0_HWgDkFT1Gzl-dg9oEEV25HBkFmHYOJWdTNDSSzSwP7meaOAXn2ZIQPCUHIKCXniz8AMQkcBBMmyYIphyQNYbDy2HTD9QA89EOVnyD70yQXpO-ZbNDnngp_PDuYHxQhAUIgiD1F72a6rnhwZM8GpgByDZ74ZWwIIuHiuCDn3sILD7TgDxVcxFUARMRM4BqlzF5x62Dsd7oCJj7OJImbiQEKMEBi5ijs5s9eYjTuR1scBdPEJYt1zEbAYAcS8wVv0rhNU6gZc34HyEeF8gKQcwBacMEciAxW0bS9jGWU70wpEUzQNQEmks6wICBfgENKPD8Arg_AH4MWGqAZBzQP4O2ANHWD8B0FTUpANDhACKNArnl6sPwHKBmcIAN3ey_5eIhXQJ61-b0HbDoJkhRKNQ_ILh0rVOW_gpYYKxYH4BRBrOfl_gF1U0A5X_LmAeYOGE8lgq_Ln40K15Civ8AAAevNBwChwAGIAGzPwCZ0lXCrIARq0LBwCKM-THVlcPwF7kNW-r0DHANLhwBVRSruVkAIqmwS4IJrzVga_Q1avzX_LC01ay1aCsjWRM_AFXe5FWtlQcA80Da_NHaudXBAPkjyRdVBC9XFG80dOINa2tFWZdq10OANbmsHWuYXV-oYB1L7mh8kIwL6-dbet_Waw_AN9psBzmXUJrz1pMJDZuuVqrQu1qqNNdmv8BHh8gFZb5Iev2TkpqUhcVsuck7Lr67W0mtTZaTLJ2FUwcYvFJ9InlkZsrS4LcnlZewngMJ2OF8FJgIga02wFEwQEkCogggarfwF3jzgaxeYTkStQTbskc38DXNogyQbjj82YAgt4WxibNYS2IB9kky0OmFvmgFbl1CQ5IDkz47GY7Nem4zclgfBsNRAdiMTRpuu2pUspsKDNPu1zTyE4upad7ZWl9N7QsIBoTFl6JjAMEIdoGzFhBujBZm6wZCE_FvbkRYb2QXOcylbm8zEUqd-GzACFYLlsgGdqAGphjSJ3eIydu4_OCLtqYHqldqAPnc3IDlM7sNJ3EFBzu5yrqntnxDFzY1drrpay9mXs0xaPN4WuCkIPn1K3VV3CTy-RDEDmo9YrmN81xTrD2LdYiWHMvYrX1VLr2w4nYGdB9E0rMdjwxUfewdCh6b20Rsg6fhjAE1EFVBdYyvcdhvsibYCi4hIOfY-hwo9ipIdezmLFrO4b5JgnQafYfBH2aAX9g--qavsh6b7GmqAEpszD328tsMafXsX03wOtNNAN-2yIxgQODoP9sMAiUf2EtCHoA4B6vYxic5n7QcIQGJV3myob5L2YyCZjkzsb17eD87TazMwgPNtpy-7BjBgWOVWHIDpfs_O5S0EmH9ofJL1C4es8XgJ6KAGACIlOL36GMA7aDozOkP3mdAYfGoFlmUPBH5oeaCo8iivxNHx4DMugF0RqAIwsjhTBfaeF7F1HKIOwIjDAdMwDhID6x9gA_v4PzIagMze493sfI9ixEOArg_8fYB6HFSd1N7JYC_JHKBAQOMEAvOT7n-MTs9AQe5vKtebFtguFrd7k63aE6cehjAGDjpwKT0twhUbbRtxw7IOx_QKfE1DBh2aXS7kxvCFhlQ5rqAG-fE7ADGpjINlFvLAi7X9cD1hcyW2CTAY34pn7svGV2p90g9S5ydWKAVgjzAdvhPQogYqkPHbk4IKITocxOaHwlqSSAu9AM-FBiUdneeE_fSX2dT27g-AXwec4HD9nfFcvW5_c6uEDg5eKgv_AuFDHAQ0AXFirelveenNoBw97FqwM1S9EFY9QVumukxgfd6QcwdUG1mIkKXdC7qRqJh0Xx7ATzdBcwrmD7MtwrIVhYqJwG7U4WnpAARwZAMh6gpEboAMidiaoyZIwGwLQDASmPC1T0z4OqylaHMKeMlcUCxpWFgVln8EB9OgAMFSvVnHYf3TRtzGNx5XMr0uMj3BeJAq-vbP-98R-HbOfnpzbci7gecv9huUwU18alcYnPFB1zxIDRtyRfOBwW0Z19lv-depEYbru4KaN-fSaLNl9sCla85JnPUAFznBFq9ufBvoR0A71yyTZLKLbXMbj1xWbjdbDdXMwoF-ajLm5jIe9rv9VC9Hswv3UcL2YlYHVraP_KnXVF_hAxdBisXjcTVLi-_OoBoLhL0lzgjnCe8VRSeEIJ2CpcOUyZ9LmAJs0XO7dzAgcNl-6neEDu4ZeQN8xy65fzhf-xwPoAu_5eRBBXOACVxGF7xqu1ncro_rQBWcyulXTsK7IfyBLB1pXazjV-5C1cXCZnK-fzd3GCr7uOw9hvhlbwQKnh15XAwqc9TA0iA8ZnCqTXfoXV-pnwIHlrV8VXSWPbbn8JRZpWCplIeccH0cCvPxqge58sG8DxjpFOwfkibGI-827TCCupKEog3ArDQ8SUDhxEWSxkDI956TT8GgpDR6eFZrsPc0P7aM-SI2BMAXHqLUBvk1gduW5dDdux4TuoB-PMAQT8qet7T7kSon29jCPdchcSRuYXkTVSH29sKzYbUN-G7ErtBlPvoE6G485ImfugvLNEVxss_6WuWt7ST9WGXtWPfIMQeICA6MLDKV7n974WmbASzRdEIWjz82SzJkt8hoz0FRBqj0QfDQbbMudzguzEf6MAJK991hGd1yovewNYX4vmFmQ5n2srjyIQA-IePZeH-vH0_DdDP0vrESL3tuy8V8VEFw9PpX2nXQejBzBVdO5DaAHQATrdOEvdnq-t4YvGOiT_EK682EDoNxUug9xiCzRnAbwMW-BiG-xVIR1YuAJSydquBOW4HftLIWn5ht4gW3sPeWayGHfC27ABsxa_DNgyV2Kn_byHrDYUpedJ3izXDDO-clnv938GA7mu-2AdvYnlAY94s8Oe9vhXU72yTDZ2foBv3x4sFV7zfjNvfgAHyp8gq2BbvmQVH_qbgAo-NtTn6bFmtbqCfpOJ69rxyPC4dGhpUALj_4fjl7C8zG7URywu8J2BaCNbnSNJ1nkRp2AUM7oMUEYCIvNw3vKdIjkp5ivqLnX5IqDb3yA2BAOrBEOHdXQ6H-gyURIBj4EyM_ki7P4UHAD1DhAn2mCklskSQ4WAakbt83_GBqR6_eI94-mGb_N-u3LfMqb_N55Ce-eLsLnkB5_OxXj2Krbv_BxJS_4iPA_5Dj6PaZ99AOjIwf4nsrGYemYugSv2P8KF0R4yWHZmK4JI4IBp-E_eFTdy8FS9ZAEtl7rICe7WdjOy-OXsyBkM0q-6qtcW4DWj642FbL5vcaB4nt9-2btPvYh-6wOb9bQStxsIvuVttIiZm_RfhQU17y-S-nhefggFwXk_vvzt9Xif7l-r9waqPMwfH-uZeCt0C_wJaTkV4a-t1mvrdFjxv638D4Ku8JAb3AR2YLP1_muTf-N61_Zzc5ydCzmuzPD8ZJQcGdu7AAbspY1dhrCroddu_75ARkF_7doP_ujBdGAAYXY8yLdhdh_-edlFiN2QAYgFGWeTHvSQ6BOmTYiK00lxBoqiLolJEB8JM0x4y1OripLUpKkSrU6NAWcDNM9KkHQ0q1OkwGx0TKgqpLU3KnnTay1OtwG8qHKp3ZB2rVPKrU6QqktTEBziJIBiqEgbKopAAqtTqD0cqiULNMqqt6SJSagXgCqBOqqjgaBOgZwGyofDAgSkBN-DGh4yMaPQEJE1YGwHUqHATGj8B7Ks7JUY1YAKoxox_usBKB8gfKoxomgT4H6B_OO1TY6e9Ljr465OjsDM6FNm5IEIAdgcqdMkugHavKD1F4SR2W0sLrCBRFmaDH4ktDACQBASLLTPUstN4rHUkijtJLKXyvwp4WMSAw4LaYQdsBQ8CATLTQgQ0rezrODuOerIkkSjtixKpXhGDPUrsgHb5mKGJtDGGzQEJyaEBvjZh0qw4KLSIaKEP9TdcvXPUC_S-aPjis8JOEMrC-LoPMEfaNFnKBjBhON-hwCkwZWSCKWSOsDcSuSBUDh4RQV0HmYxsMoq6uyRAMi5BkoPPgpcK4FcHZA3ig7abkiDqsDN22wGh6d677MXYawUQgnYnoLwXATFI54paYbYdALzqyugLu_QZEtVPOC8QVMJ8HoA3wRuSEOEYJgDkwrgA6JpE-pFkTFQ2xHmgOiwVDCG--FRDsAlwkfst6UhL7lvgIhLQVEKjKEtLUFi0KyiEFOQAyLTARBV9FEEagmQbpADIZQRIqagQ9qV7XSFQbMrpS82sg7ZBdSgYaxeEoT0F9BWOlgGiQOASYGbK78OTbChg1OwD6hSQbAhmhgunAio0cqO_RmhDYu7LRemyAgS8E4wPCRLA10P2iFk0rDxLlkbjAMT6hZPKYFFoN0NE5QsVvPqEjS2AT-ROQosngFE6A1N3YUBiKBNS8BVodtKyo0irwENiE2P6HM02suPJfug_iKx4yUYbqExhkgJYFChoit3aWB5oaxB1h6YWkEmhA_sKxla09l8qM6LypYpTAdYQ6HgaCno4rVguSLOBqEYwAMSWB48hYALiffg2LyeK_lX6XCq3s6HXeUEIdCuAiTNHhDqhZBkKVaZIAXzFh7YXcDj-lfhBqBu-IWPAVmTguuFjASDggqsCN4dg4RgKQO1x6ujWvXiFArWnXRW8lgWWHfKU6E5A2BjKqHTVhBARLRARLASmGwIEERwHHU3VpYjd2rnOTz2mUzq2FD-HYdtSz2iiAIp3AUisiQwRodEUiOhg4SuHDhH5LACyW0BALC_0C0PIyWkKHOiRbQV1uSjokVEQWAJQzEc8giAIMgxF0kHEVlDehw_rkjC8W0EhHUcXQChH-4j4ARHMqZ4TP7v02iJSrMBsEWOHlyMkct7k8SwBREEAbEakz0RtJCEQTgrEUIRLAXgDcCRAvEYQDcSikQyo0qqWi8InhjXqv5LhKiO8FJmBEBFxnEmkeviFUg4DuEuRALKP4T2h4Wa6ORUzvVqQ8-XFkLC8rAtZoiRCUGJEyckkSojSRAdMpGh0pXNX4vu74X6FpR7AaHSfu2fFbzqRf4TgEOBcYYaH4BrOvtTlRvAVBGsQtUYIFwRqQTaFJ0KdDyqOBb0kREDhw3qREIiukFEBYAM0OXTzQxyKZGDkeAMNFMRTrNLjoMqGJQA_MJJOJ7xe8lIpT9RHbkM4IqImNHjwSoHIM6mQrbEUQBEb7PEB3sbLMdhnsIWs-xG-x2EIA2-MMJBxOwdcI9ECkkDC9FBiNmNHi-K8hK85kumQmyQn4MaKRKRQwlLQ7XcjyFtFcwO0YqKheh0e2wCk5PHDGbszsOrBS0iMXF5HRiRJ9FyI30Teg0OolODFHo8bgGpAxufqo7ZhSEgMSNRTgd3iDRw0W6KDOn5nmopSk0UtG3mORItGzQFwdrLoOCDqepF-ETu45uRlplxqgxolPiH4xYzDdy-8DWrXixecchDJfh4YSFEwQ7UTwGCBpURWECqoEdVHc0CgfVEQACgU2EIREtIlGDMyUbl5oRDyjVQz2qynPaFMKiHhHv0Cgf2ENyJEbCH8Mo0CUI2u44bAgCqz4aOBucFscnjtAQqhBrcSXsWXT2R7hHOE1aDXlM5r-fUQRqRQviFED_kboeJGcUW4TbE-xGfDWBWxR4cnjzhp4Qp7nhQYTJwVmC4ekTk8gji0IxRxMelxpx3QKpSV-KcE3G1xAUTHAZcsUVxrxRI4Ff6ZxwcY-BhxU_tlFyxGOpHEj0nIcTAqxAqprEjqTkK3Q6xiYRLSIuBsYi7GxTsZFCIursS9S9RHsa6Gc-7gqVyeh5dGUirRw_sFR5hrEK3TlxHoTggbalHrNyGEHhCYRmEIPJy7JA44CcBWQtBKXSZgXgKECOwSsUWFthDdIbSBBOof-GOQ0gXIHax8YZZYihukJ4H6xnhLAgoJogZvE7SZsRJEygqEcFFgJjyp2H2xOESbH7UvpqGa2xjOrAhbxDdHAmiBu8U6EHxH5NyT8R8jEyRsJF8SogmO3ajXEJRgcchF4JUkd2b0JKgXJE8J4wN9K-xN8aIll05cYMyCE1ESIQGRRDhdjP80cUVrbQxcU5GLhLXq5FDhCAinG5osAM4DvsnFHPZ8657DDDhcTcV5GZxSwNnEdhY4XnFDB-4ZPbVa1IvHGteEUWC4WJ7OlYnQSDGr3GeI_iVdHJwycluGZmfOp7p-JI0GElFKxEueEWJpiadE9x8msklmJAlnASRJNAtEmDeniCkkbamPJFHtx0UeTxpJHItXGZxokQImDxQiSlGhx8qplGdxb4ePH146TiAlFRKsRgklC88QfTOQSqopDLxSCTJCDJ3pAbG-BhECRAUQVEDRB0QWCekFQQBcWa7tctSUlH1JfkcQnYRC9j2HcQYyTRFAee8cuHMJKIXwn9xQcRskhxDsKVz1a_UVBDOMpkA1j6QFPiwCPJo8BuETwvUAlDTwMyXPDa0i8MvDrwW8PMmqegURIn5ArkFPSqRAxJoHyJCfntG50TMXXAvJrcEsA3hnydhRa--yRoni4YUa16JxHsXcl1c5id5GOJmyc4nD-riXcohRHieT5eJk_j4lwhWiaUlsk9cbtFxRZyTgnuclyY-DXJzXmlqguubv0oTx-yYVFSQVvJoF9JPvAMkaqK9MMkmhS9JqqIgaCaxCKpK9M1FC6ZCdEFbasQUcq0IUutglrJ5sZcm3mBCehGbJmEXbHbJ3YZmHj0sqajiMJ7sYHjCRnKUam4JnnMIlqp8wDcmxUEiVBC9G4SKCmDyEia84-x5cl6kaR9iX2CmGMsQ-wzis4VolxxC4fynHJa3u_SpxvMHYkycDiQko5xFKdwm5mAwU3q2Ar4om56JjzgGnp4ocfoHRpkDKz5BAE_JzzdAPXKVztAr4owBCc2BmICF6-cWanWxKUdonhRvqbmYbYUUaynlJQSekmupA8eskepDSRGnNJ5aTLGCpAWsKn14rzmKkzxYCXsn2pxRB1RZWuACTaRS7VCUyIJ6qCAC0APoFkD2Wjllmom2YyD_j8AeNvIAvpQAA",mdxType:"Playground"},Object(C.b)(n.a,{width:500,height:300,options:{backgroundColor:15659509},mdxType:"Stage"},Object(C.b)(s.f,{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/placeholder.png",uvs:I,vertices:c,indices:Q,drawMode:o.d.TRIANGLES,mdxType:"SimpleMesh"}))),Object(C.b)("h2",{id:"example"},"Example"),Object(C.b)("iframe",{height:500,scrolling:"no",title:"Mesh",src:"//codepen.io/inlet/embed/69e7153234c4e01232a7dbc50bbceb40/?height=300&theme-id=33987&default-tab=result&embed-version=2",frameBorder:"no",allowFullScreen:!0,style:{width:"100%"}}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/SimpleMesh.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=src-components-simple-mesh.5b52a953a411bb8b7c6f.js.map