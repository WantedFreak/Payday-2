$(function($)
{
	var imgData = [
		{ //  0 Bank Heist
			images: [
				"https://i.imgur.com/uGWmPEn.jpg",
				"https://i.imgur.com/ERz7UY7.jpg",
				"https://i.imgur.com/nvlonMs.jpg",
				"https://i.imgur.com/6fRjuRE.jpg",
				"https://i.imgur.com/5wpBFXI.jpg",
				"https://i.imgur.com/RZoWTJQ.jpg",
				"https://i.imgur.com/2tYxahJ.jpg",
				"https://i.imgur.com/EFlOET0.jpg",
				"https://i.imgur.com/7C3zgl1.jpg",
				"https://i.imgur.com/SNRMAZf.jpg",
				"https://i.imgur.com/DFXpCeO.jpg",
				"https://i.imgur.com/m5qlfq0.jpg",
				"https://i.imgur.com/fojjZ5e.jpg",
				"https://i.imgur.com/w1aofzU.jpg",
				"https://i.imgur.com/I9lvrjk.jpg",
				"https://i.imgur.com/KcStnDf.jpg",
				"https://i.imgur.com/gLyJOJa.jpg",
				"https://i.imgur.com/zdluu5I.jpg",
				"https://i.imgur.com/nQPUPOu.jpg",
				"https://i.imgur.com/jT4qJSK.jpg"
			],
			maps: [
				"https://i.imgur.com/8SwCHs2.png",
				"https://i.imgur.com/qnpn065.png"
			],
			coords: [
				[
					[1396, 997, 1],
					[441, 1840, 9],
					[517, 1387, 10],
					[1438, 1100, 16],
					[1487, 993, 17],
					[1487, 1105, 18]
				],
				[
					[758, 1002, 2],
					[1346, 960, 3],
					[1327, 731, 4],
					[84, 1718, 5],
					[1103, 1713, 6],
					[1746, 1121, 7],
					[1902, 270, 8],
					[1395, 323, 11],
					[1019, 765, 12],
					[578, 474, 13],
					[151, 346, 14],
					[418, 1898, 15],
					[557, 1203, 19],
					[1248, 1158, 20]
				]
			]
		},
		{ //  1 Diamond Store --
			images: [
				"https://i.imgur.com/NtfBwSh.jpg",
				"https://i.imgur.com/0ufsP8N.jpg",
				"https://i.imgur.com/zrPWcPb.jpg",
				"https://i.imgur.com/np1VpxE.jpg",
				"https://i.imgur.com/koNplQG.jpg",
				"https://i.imgur.com/vlcvl2R.jpg",
				"https://i.imgur.com/nfUDWNw.jpg",
				"https://i.imgur.com/EqDVjez.jpg",
				"https://i.imgur.com/1jVMwEP.jpg",
				"https://i.imgur.com/G8QnfXW.jpg",
				"https://i.imgur.com/xRk6BVO.jpg",
				"https://i.imgur.com/xXsCHtX.jpg",
				"https://i.imgur.com/xvulKaT.jpg",
				"https://i.imgur.com/xPfunuQ.jpg",
				"https://i.imgur.com/N9jMeh8.jpg",
				"https://i.imgur.com/Me1tIWb.jpg",
				"https://i.imgur.com/fn02BOk.jpg",
				"https://i.imgur.com/mFgyf6Q.jpg"
			]
		},
		{ //  2 GO bank --
			images: [
				"https://i.imgur.com/9zMOAam.jpg",
				"https://i.imgur.com/gBlteRi.jpg",
				"https://i.imgur.com/dVY23xN.jpg",
				"https://i.imgur.com/VaBAUuR.jpg",
				"https://i.imgur.com/7WWqKKD.jpg",
				"https://i.imgur.com/hJYkGaZ.jpg",
				"https://i.imgur.com/grFncDs.jpg",
				"https://i.imgur.com/27RODsD.jpg",
				"https://i.imgur.com/bZDptk8.jpg",
				"https://i.imgur.com/9puaMWJ.jpg",
				"https://i.imgur.com/1QEwTd3.jpg",
				"https://i.imgur.com/Qh4E7q3.jpg",
				"https://i.imgur.com/GIxRDTR.jpg",
				"https://i.imgur.com/kuYqYxC.jpg",
				"https://i.imgur.com/VQ25dCt.jpg",
				"https://i.imgur.com/QUDB2kF.jpg",
				"https://i.imgur.com/ZVRnpoq.jpg",
				"https://i.imgur.com/A9IvSVw.jpg",
				"https://i.imgur.com/1f1haoa.jpg",
				"https://i.imgur.com/OZRB5KK.jpg"
			]
		},
		{ //  3 Jewelry Store --
			images: [
				"https://i.imgur.com/aMagaOA.jpg",
				"https://i.imgur.com/ZFZVhZR.jpg",
				"https://i.imgur.com/baAafba.jpg",
				"https://i.imgur.com/ZblwES6.jpg",
				"https://i.imgur.com/AqS0eYy.jpg",
				"https://i.imgur.com/pdXqShG.jpg",
				"https://i.imgur.com/gSEbpPU.jpg",
				"https://i.imgur.com/O67upAb.jpg",
				"https://i.imgur.com/NpIIfrZ.jpg",
				"https://i.imgur.com/pamuR0z.jpg",
				"https://i.imgur.com/8x697JK.jpg",
				"https://i.imgur.com/9NFHzi5.jpg",
				"https://i.imgur.com/BRWOrfo.jpg",
				"https://i.imgur.com/6clirRr.jpg",
				"https://i.imgur.com/qLwSki7.jpg",
				"https://i.imgur.com/hchA2K7.jpg",
				"https://i.imgur.com/gqIwnzu.jpg",
				"https://i.imgur.com/motmZF5.jpg",
				"https://i.imgur.com/wr78VYH.jpg",
				"https://i.imgur.com/hJbg0aU.jpg"
			]
		},
		{ //  4 Shadow Raid
			images: [
				"https://i.imgur.com/imiKukv.jpg",
				"https://i.imgur.com/ATzWZbr.jpg",
				"https://i.imgur.com/n9nkurg.jpg",
				"https://i.imgur.com/VEUT1hM.jpg",
				"https://i.imgur.com/Oeqvelj.jpg",
				"https://i.imgur.com/FDW9KTU.jpg",
				"https://i.imgur.com/l7Lky0j.jpg",
				"https://i.imgur.com/oY4K83I.jpg",
				"https://i.imgur.com/a2AuRWv.jpg",
				"https://i.imgur.com/QbhmbPP.jpg",
				"https://i.imgur.com/DdxfOiF.jpg",
				"https://i.imgur.com/KUKYCkp.jpg",
				"https://i.imgur.com/KCzhfhl.jpg",
				"https://i.imgur.com/EzvbuWH.jpg",
				"https://i.imgur.com/ScrRVMK.jpg",
				"https://i.imgur.com/PIqhhxr.jpg",
				"https://i.imgur.com/zUDcV2H.jpg",
				"https://i.imgur.com/SLss7sh.jpg",
				"https://i.imgur.com/oMff01K.jpg",
				"https://i.imgur.com/x2dcc2i.jpg"
			],
			maps: [
				"https://i.imgur.com/3hugFcI.png",
				"https://i.imgur.com/qEhAqKV.png",
				"https://i.imgur.com/uXs66Sm.png",
				"https://i.imgur.com/5KfkLRl.png"
			],
			coords: [
				[
					[1317, 660, 1],
					[750, 932, 2],
					[512, 905, 3],
					[236, 1637, 6],
					[1412, 1474, 11],
					[75, 1444, 13],
					[622, 750, 14],
					[345, 879, 15],
					[1142, 1818, 16],
					[111, 1859, 17],
					[148, 653, 18],
					[1227, 1853, 19]
				],
				[
					[815, 822, 4],
					[1288, 1646, 7],
					[1433, 581, 12],
					[1119, 985, 20]
				],
				[
					[1652, 866, 5],
					[394, 1852, 10]
				],
				[
					[922, 377, 8],
					[395, 1757, 9]
				]
			]
		},
		{ //  5 Transport: Crossroads
			images: [
				"https://i.imgur.com/bf71fR1.jpg",
				"https://i.imgur.com/XRhRUpn.jpg",
				"https://i.imgur.com/ImUoMCo.jpg",
				"https://i.imgur.com/4eioLIc.jpg",
				"https://i.imgur.com/GUEN1Jb.jpg",
				"https://i.imgur.com/gzFItum.jpg",
				"https://i.imgur.com/XCOWRRn.jpg",
				"https://i.imgur.com/InxDznh.jpg",
				"https://i.imgur.com/Ew2AmkD.jpg",
				"https://i.imgur.com/bp1NZGU.jpg",
				"https://i.imgur.com/dU7z1PS.jpg",
				"https://i.imgur.com/vSB9uGG.jpg",
				"https://i.imgur.com/TCnM9P8.jpg",
				"https://i.imgur.com/ybeRcGZ.jpg",
				"https://i.imgur.com/VWno003.jpg",
				"https://i.imgur.com/QkjJynF.jpg",
				"https://i.imgur.com/gSVToFl.jpg",
				"https://i.imgur.com/lV7Wgy0.jpg",
				"https://i.imgur.com/yKbaRZK.jpg",
				"https://i.imgur.com/BrUvtmM.jpg"
			],
			maps: [
				"https://i.imgur.com/wSqDSJ2.jpg"
			],
			coords: [
				[750, 870, 1],
				[380, 878, 2],
				[257, 810, 3],
				[251, 430, 4],
				[485, 200, 5],
				[320, 727, 6],
				[519, 886, 7],
				[971, 705, 8],
				[996, 667, 9],
				[809, 846, 10],
				[959, 731, 11],
				[1008, 755, 12],
				[372, 327, 13],
				[850, 386, 14],
				[457, 787, 15],
				[951, 362, 16],
				[855, 907, 17],
				[382, 274, 18],
				[473, 928, 19],
				[1025, 889, 20]
			]
		},
		{ //  6 Transport: Downtown
			images: [
				"https://i.imgur.com/rSfJo2F.jpg",
				"https://i.imgur.com/Wy9YhTg.jpg",
				"https://i.imgur.com/6wsuA7F.jpg",
				"https://i.imgur.com/JMRjdE2.jpg",
				"https://i.imgur.com/1V552Ty.jpg",
				"https://i.imgur.com/sav6u8C.jpg",
				"https://i.imgur.com/8ptnM4W.jpg",
				"https://i.imgur.com/tb7JGZG.jpg",
				"https://i.imgur.com/SkcuMhc.jpg",
				"https://i.imgur.com/1T7ASK9.jpg",
				"https://i.imgur.com/NFNpNXG.jpg",
				"https://i.imgur.com/pdRSbwV.jpg",
				"https://i.imgur.com/6tDRp6y.jpg",
				"https://i.imgur.com/PVjFIRQ.jpg",
				"https://i.imgur.com/aFdnhqf.jpg",
				"https://i.imgur.com/nfFTsEn.jpg",
				"https://i.imgur.com/eCISswB.jpg",
				"https://i.imgur.com/gbKLW38.jpg",
				"https://i.imgur.com/uvQNyDv.jpg"
			],
			maps: [
				"https://i.imgur.com/vLSKlN3.jpg"
			],
			coords: [
				[504, 115, 1],
				[767, 314, 2],
				[626, 214, 3],
				[476, 320, 4],
				[863, 346, 5],
				[565, 346, 6],
				[461, 893, 7],
				[796, 894, 8],
				[793, 786, 9],
				[567, 792, 10],
				[562, 209, 11],
				[682, 791, 12],
				[650, 901, 13],
				[469, 838, 14],
				[602, 902, 15],
				[565, 922, 16],
				[497, 309, 17],
				[381, 425, 18],
				[384, 346, 19]
			]
		},
		{ //  7 Transport: Harbor
			images: [
				"https://i.imgur.com/jnPQNh8.jpg",
				"https://i.imgur.com/icWyhS3.jpg",
				"https://i.imgur.com/sCEjgwC.jpg",
				"https://i.imgur.com/RP4037M.jpg",
				"https://i.imgur.com/TxPThSV.jpg",
				"https://i.imgur.com/6M06UM5.jpg",
				"https://i.imgur.com/HYxr295.jpg",
				"https://i.imgur.com/ZZMBvA5.jpg",
				"https://i.imgur.com/CCF0QAc.jpg",
				"https://i.imgur.com/JIuIOSN.jpg",
				"https://i.imgur.com/ulD1t8b.jpg",
				"https://i.imgur.com/TV5a0ii.jpg",
				"https://i.imgur.com/4zC6FAX.jpg",
				"https://i.imgur.com/Sh13tYt.jpg",
				"https://i.imgur.com/4jbqHoY.jpg",
				"https://i.imgur.com/ViRne12.jpg",
				"https://i.imgur.com/LIm0Fft.jpg",
				"https://i.imgur.com/TcE5oNz.jpg",
				"https://i.imgur.com/AO1K5kO.jpg",
				"https://i.imgur.com/OlE6rjV.jpg"
			],
			maps: [
				"https://i.imgur.com/IysWHGQ.jpg"
			],
			coords: [
				[371, 484, 1],
				[328, 567, 2],
				[407, 518, 3],
				[662, 124, 4],
				[1044, 547, 5],
				[999, 607, 6],
				[582, 660, 7],
				[731, 679, 8],
				[817, 247, 9],
				[373, 908, 10],
				[985, 929, 11],
				[465, 548, 12],
				[584, 486, 13],
				[491, 429, 14],
				[492, 287, 15],
				[1000, 694, 16],
				[756, 259, 17],
				[387, 662, 18],
				[787, 246, 19],
				[727, 495, 20]
			]
		},
		{ //  8 Transport: Park
			images: [
				"https://i.imgur.com/iaZvi17.jpg",
				"https://i.imgur.com/b4Uwjxm.jpg",
				"https://i.imgur.com/KUjth6E.jpg",
				"https://i.imgur.com/35S1ZAd.jpg",
				"https://i.imgur.com/wCZkLUG.jpg",
				"https://i.imgur.com/gyCKPqz.jpg",
				"https://i.imgur.com/IMJGQF2.jpg",
				"https://i.imgur.com/POZf5Ec.jpg",
				"https://i.imgur.com/wOKD2xn.jpg",
				"https://i.imgur.com/RtEEoZR.jpg",
				"https://i.imgur.com/QFyAkJ4.jpg",
				"https://i.imgur.com/ctb7NBB.jpg",
				"https://i.imgur.com/nrMR3DK.jpg",
				"https://i.imgur.com/ZT8rvO1.jpg",
				"https://i.imgur.com/K0029Ki.jpg",
				"https://i.imgur.com/KyphR8Z.jpg",
				"https://i.imgur.com/94ceENE.jpg",
				"https://i.imgur.com/tlkCwxh.jpg"
			],
			maps: [
				"https://i.imgur.com/mbU31B4.jpg"
			],
			coords: [
				[884, 932, 1],
				[1070, 682, 2],
				[772, 676, 3],
				[525, 596, 4],
				[479, 154, 5],
				[943, 501, 6],
				[568, 165, 7],
				[679, 164, 8],
				[319, 689, 9],
				[578, 589, 10],
				[983, 131, 11],
				[916, 260, 12],
				[408, 624, 13],
				[308, 295, 14],
				[657, 335, 15],
				[249, 937, 16],
				[528, 0, 17],
				[911, 519, 18]
			]
		},
		{ //  9 Train
			images: [
				"https://i.imgur.com/EG87BWD.jpg",
				"https://i.imgur.com/Sfrbmfm.jpg",
				"https://i.imgur.com/5QwO6Fy.jpg",
				"https://i.imgur.com/2A3UJmP.jpg",
				"https://i.imgur.com/RFjzamc.jpg",
				"https://i.imgur.com/yLtHnEq.jpg",
				"https://i.imgur.com/0JSezzp.jpg",
				"https://i.imgur.com/VKJbkWH.jpg",
				"https://i.imgur.com/MC7vqog.jpg",
				"https://i.imgur.com/yNgmArQ.jpg",
				"https://i.imgur.com/325s5aq.jpg",
				"https://i.imgur.com/6tTY9H0.jpg",
				"https://i.imgur.com/wDyWihZ.jpg",
				"https://i.imgur.com/vmJn0XR.jpg",
				"https://i.imgur.com/SV0TGGZ.jpg",
				"https://i.imgur.com/cVYiDxx.jpg",
				"https://i.imgur.com/tgbu8kk.jpg",
				"https://i.imgur.com/p2IBBfp.jpg",
				"https://i.imgur.com/5VERES3.jpg",
				"https://i.imgur.com/yyfuvzi.jpg"
			],
			maps: [
				"https://i.imgur.com/J9H3FDl.jpg"
			],
			coords: [
				[447, 679, 1],
				[478, 565, 2],
				[430, 747, 3],
				[271, 611, 4],
				[278, 539, 5],
				[209, 510, 6],
				[156, 287, 7],
				[259, 423, 8],
				[345, 415, 9],
				[447, 529, 10],
				[199, 629, 11],
				[181, 421, 12],
				[299, 336, 13],
				[1193, 287, 14],
				[403, 538, 15],
				[382, 302, 16],
				[239, 611, 17],
				[306, 253, 18],
				[544, 254, 19],
				[1206, 312, 20]
			]
		},
		{ // 10 Transport: Underpass --
			images: [
				"https://i.imgur.com/VagNvXs.jpg",
				"https://i.imgur.com/5EEkUO1.jpg",
				"https://i.imgur.com/FNs7mqF.jpg",
				"https://i.imgur.com/3HnnK62.jpg",
				"https://i.imgur.com/ZWYHC0Q.jpg",
				"https://i.imgur.com/fDdqez1.jpg",
				"https://i.imgur.com/LNj65Gq.jpg",
				"https://i.imgur.com/suQbOYI.jpg",
				"https://i.imgur.com/lYVYJmp.jpg",
				"https://i.imgur.com/x9733rP.jpg",
				"https://i.imgur.com/IT0DoE3.jpg",
				"https://i.imgur.com/wSEVOK3.jpg",
				"https://i.imgur.com/5c7Yo3Z.jpg",
				"https://i.imgur.com/eoV6FYx.jpg",
				"https://i.imgur.com/dA1HRKm.jpg",
				"https://i.imgur.com/KYQjOcP.jpg",
				"https://i.imgur.com/yukHpcN.jpg",
				"https://i.imgur.com/p3fwxa3.jpg"
			]
		},
		{ // 11 Cafe Escape
			images: [
				"https://i.imgur.com/zj8lSpm.jpg",
				"https://i.imgur.com/g0p1kz8.jpg",
				"https://i.imgur.com/6015YI7.jpg",
				"https://i.imgur.com/VcoihRI.jpg",
				"https://i.imgur.com/5o4fSGc.jpg",
				"https://i.imgur.com/mepTApZ.jpg",
				"https://i.imgur.com/mxqoDTb.jpg",
				"https://i.imgur.com/Cv18tSg.jpg",
				"https://i.imgur.com/8fziHmN.jpg",
				"https://i.imgur.com/34Yid1q.jpg",
				"https://i.imgur.com/OosTwy7.jpg",
				"https://i.imgur.com/SAkzjKr.jpg",
				"https://i.imgur.com/0MAHfAW.jpg",
				"https://i.imgur.com/8CEF8FO.jpg",
				"https://i.imgur.com/ZTQGeu1.jpg",
				"https://i.imgur.com/7qTqRq5.jpg",
				"https://i.imgur.com/szYBxBh.jpg"
			],
			maps: [
				"https://i.imgur.com/43tUmOH.jpg"
			],
			coords: [
				[1074, 353, 1],
				[964, 327, 2],
				[1110, 675, 3],
				[781, 591, 4],
				[792, 618, 5],
				[708, 745, 6],
				[537, 657, 7],
				[281, 321, 8],
				[533, 988, 9],
				[326, 928, 10],
				[286, 261, 11],
				[609, 72, 12],
				[775, 802, 13],
				[726, 608, 14],
				[538, 219, 15],
				[617, 745, 16],
				[615, 609, 17]
			]
		},
		{ // 12 Garage Escape --
			images: [
				"https://i.imgur.com/FID40R8.jpg",
				"https://i.imgur.com/lk4AjxP.jpg",
				"https://i.imgur.com/xiSgMHe.jpg",
				"https://i.imgur.com/pr1ee4i.jpg",
				"https://i.imgur.com/k9YsgVE.jpg",
				"https://i.imgur.com/dSwrMjo.jpg",
				"https://i.imgur.com/kobg7Wu.jpg",
				"https://i.imgur.com/laaKiHJ.jpg",
				"https://i.imgur.com/1KUyfV9.jpg",
				"https://i.imgur.com/NOqWM3T.jpg",
				"https://i.imgur.com/e7Muk1m.jpg",
				"https://i.imgur.com/1gYfiS4.jpg",
				"https://i.imgur.com/TMrBhgQ.jpg",
				"https://i.imgur.com/wrxNedf.jpg",
				"https://i.imgur.com/PwuXvfa.jpg"
			]
		},
		{ // 13 Firestarter Day 1
			images: [
				"https://i.imgur.com/Je4IDf3.jpg",
				"https://i.imgur.com/C7WEPnt.jpg",
				"https://i.imgur.com/qKhdglO.jpg",
				"https://i.imgur.com/Xs50s0e.jpg",
				"https://i.imgur.com/UXgcNnR.jpg",
				"https://i.imgur.com/94t7Jkv.jpg",
				"https://i.imgur.com/f8TJGWi.jpg",
				"https://i.imgur.com/4wx0zl6.jpg",
				"https://i.imgur.com/ckPWimb.jpg",
				"https://i.imgur.com/EsuUdvm.jpg",
				"https://i.imgur.com/LvBUWM9.jpg",
				"https://i.imgur.com/xBWmqha.jpg",
				"https://i.imgur.com/t5zRQNB.jpg",
				"https://i.imgur.com/Ywg2lSP.jpg",
				"https://i.imgur.com/sY8d5sq.jpg",
				"https://i.imgur.com/efv6dxg.jpg",
				"https://i.imgur.com/xXWT0Pk.jpg",
				"https://i.imgur.com/qFeRpYY.jpg",
				"https://i.imgur.com/V3yaN8H.jpg",
				"https://i.imgur.com/4GiIoGk.jpg"
			],
			maps: [
				"https://i.imgur.com/cwUY8O9.png"
			],
			coords: [
				[457, 38, 1],
				[620, 179, 2],
				[786, 544, 3],
				[591, 138, 4],
				[804, 137, 5],
				[874, 166, 6],
				[940, 272, 7],
				[848, 593, 8],
				[854, 311, 9],
				[218, 340, 10],
				[187, 442, 11],
				[219, 679, 12],
				[280, 292, 13],
				[74, 832, 14],
				[258, 961, 15],
				[302, 681, 16],
				[495, 862, 17],
				[309, 272, 18],
				[553, 611, 19],
				[640, 318, 20]
			]
		},
		{ // 14 Firestarter Day 2
			images: [
				"https://i.imgur.com/cRSCb3d.jpg",
				"https://i.imgur.com/28LIhym.jpg",
				"https://i.imgur.com/lhwxI0H.jpg",
				"https://i.imgur.com/xIuojOm.jpg",
				"https://i.imgur.com/XqirRoD.jpg",
				"https://i.imgur.com/G2qv5xT.jpg",
				"https://i.imgur.com/K3omk9S.jpg",
				"https://i.imgur.com/jSZs59x.jpg",
				"https://i.imgur.com/bzAjdmS.jpg",
				"https://i.imgur.com/1zyS6bU.jpg",
				"https://i.imgur.com/B7D94Jh.jpg",
				"https://i.imgur.com/ixPOFr1.jpg",
				"https://i.imgur.com/0SPrBT9.jpg",
				"https://i.imgur.com/0jix5IN.jpg",
				"https://i.imgur.com/FhhidXl.jpg",
				"https://i.imgur.com/3OrsWWT.jpg",
				"https://i.imgur.com/1ERatXI.jpg",
				"https://i.imgur.com/Q7Etp6O.jpg",
				"https://i.imgur.com/T8ZrSox.jpg",
				"https://i.imgur.com/mdky3fY.jpg"
			],
			maps: [
				"https://i.imgur.com/VOiJK1c.png",
				"https://i.imgur.com/VZ9iry6.png"
			],
			coords: [
				[
					[923, 701, 1],
					[587, 240, 2],
					[510, 568, 3],
					[559, 568, 4],
					[420, 429, 7],
					[339, 429, 8],
					[510, 539, 9],
					[508, 511, 10],
					[693, 763, 11],
					[1050, 409, 15],
					[523, 654, 16],
					[510, 606, 18],
					[669, 568, 19],
					[745, 0, 20]
				],
				[
					[513, 469, 5],
					[510, 288, 6],
					[510, 536, 12],
					[603, 691, 13],
					[236, 460, 14],
					[511, 355, 17]
				]
			]
		},
		{ // 15 Rats Day 1
			images: [
				"https://i.imgur.com/8eesWUw.jpg",
				"https://i.imgur.com/eDNKPVG.jpg",
				"https://i.imgur.com/cXLcwSB.jpg",
				"https://i.imgur.com/MJbhuvw.jpg",
				"https://i.imgur.com/21RMDwQ.jpg",
				"https://i.imgur.com/F51szlb.jpg",
				"https://i.imgur.com/mlj6VFx.jpg",
				"https://i.imgur.com/KfUBVzQ.jpg",
				"https://i.imgur.com/auloeCM.jpg",
				"https://i.imgur.com/tfmrtbW.jpg",
				"https://i.imgur.com/rryYKJw.jpg",
				"https://i.imgur.com/QWxu7fO.jpg",
				"https://i.imgur.com/9UEoAhL.jpg",
				"https://i.imgur.com/CNHTH5m.jpg",
				"https://i.imgur.com/Jv5zDD2.jpg",
				"https://i.imgur.com/ygT2Fhn.jpg",
				"https://i.imgur.com/uvmeXC1.jpg",
				"https://i.imgur.com/eTqDNqz.jpg",
				"https://i.imgur.com/rzxHI28.jpg",
				"https://i.imgur.com/5M3oa3E.jpg"
			],
			maps: [
				"https://i.imgur.com/CeiJB6j.jpg"
			],
			coords: [
				[1187, 724, 1],
				[884, 755, 2],
				[701, 393, 3],
				[350, 836, 4],
				[673, 709, 5],
				[612, 368, 6],
				[309, 480, 7],
				[467, 471, 8],
				[707, 608, 9],
				[421, 381, 10],
				[311, 451, 11],
				[707, 578, 12],
				[309, 507, 13],
				[555, 276, 14],
				[668, 414, 15],
				[420, 414, 16],
				[1041, 749, 17],
				[336, 373, 18],
				[346, 584, 19],
				[844, 246, 20]
			]
		},
		{ // 16 Rats Day 2 --
			images: [
				// "https://i.imgur.com/p9Xjv2B.jpg",
				// "https://i.imgur.com/K0Zi9qd.jpg",
				// "https://i.imgur.com/FGOaTMP.jpg",
				"https://i.imgur.com/Q0qC8f1.jpg",
				"https://i.imgur.com/AhUCa1t.jpg",
				"https://i.imgur.com/HgTVYuP.jpg",
				"https://i.imgur.com/TcOnveX.jpg",
				"https://i.imgur.com/QW4h7Je.jpg",
				"https://i.imgur.com/Epa3lCJ.jpg",
				"https://i.imgur.com/M5FkXT0.jpg",
				"https://i.imgur.com/bnD8QUb.jpg",
				"https://i.imgur.com/z28IxfD.jpg",
				"https://i.imgur.com/9jSPZe1.jpg",
				"https://i.imgur.com/O3qAj6N.jpg",
				"https://i.imgur.com/e8JrXry.jpg",
				"https://i.imgur.com/0pyGf1P.jpg",
				"https://i.imgur.com/CKRDepv.jpg",
				"https://i.imgur.com/s8Vzl8e.jpg",
				"https://i.imgur.com/OEpJsq7.jpg",
				"https://i.imgur.com/CmC67ME.jpg",
				"https://i.imgur.com/F859FpD.jpg",
				"https://i.imgur.com/lJl6gIA.jpg",
				"https://i.imgur.com/1kb4kaL.jpg",
				"https://i.imgur.com/JLvUWVs.jpg"
			]
		},
		{ // 17 Rats Day 3
			images: [
				"https://i.imgur.com/TXEPYTz.jpg",
				"https://i.imgur.com/y2OYs0X.jpg",
				"https://i.imgur.com/sIIwI7V.jpg",
				"https://i.imgur.com/XCnPIyp.jpg",
				"https://i.imgur.com/n019aXj.jpg",
				"https://i.imgur.com/Dyu7o7t.jpg",
				"https://i.imgur.com/nfZQlwQ.jpg",
				"https://i.imgur.com/ljejanD.jpg",
				"https://i.imgur.com/gGDvbL6.jpg",
				"https://i.imgur.com/A8xs4ny.jpg",
				"https://i.imgur.com/UbnxVkj.jpg",
				"https://i.imgur.com/zHB3he3.jpg",
				"https://i.imgur.com/QmAwKvJ.jpg",
				"https://i.imgur.com/4drvDDx.jpg",
				"https://i.imgur.com/g5quEob.jpg",
				"https://i.imgur.com/iNRcBZ3.jpg",
				"https://i.imgur.com/D3QUPXf.jpg",
				"https://i.imgur.com/Frui2ZE.jpg",
				"https://i.imgur.com/VSQlfqv.jpg"
			],
			maps: [
				"https://i.imgur.com/DxSmkkj.jpg"
			],
			coords: [
				[190, 288, 1],
				[419, 251, 2],
				[581, 289, 3],
				[508, 202, 4],
				[767, 111, 5],
				[761, 222, 6],
				[1015, 241, 7],
				[1106, 242, 8],
				[1237, 122, 9],
				[955, 119, 10],
				[89, 200, 11],
				[214, 129, 12],
				[427, 107, 13],
				[1157, 117, 14],
				[271, 183, 16],
				[519, 245, 17],
				[898, 291, 18],
				[903, 180, 19],
				[1257, 287, 21]
			]
		},
		{ // 18 Watchdogs Day 1
			images: [
				"https://i.imgur.com/frRJ9nT.jpg",
				"https://i.imgur.com/4zULF5w.jpg",
				"https://i.imgur.com/ziPsFNb.jpg",
				"https://i.imgur.com/O3o9bHQ.jpg",
				"https://i.imgur.com/TZyKhpw.jpg",
				"https://i.imgur.com/JGa5pUD.jpg",
				"https://i.imgur.com/FQKALlK.jpg",
				"https://i.imgur.com/lJUCyOw.jpg",
				"https://i.imgur.com/QqoIJ7o.jpg",
				"https://i.imgur.com/i1NIBZ0.jpg",
				"https://i.imgur.com/IQNsgPo.jpg",
				"https://i.imgur.com/s3XM7rI.jpg",
				"https://i.imgur.com/3ihH918.jpg",
				"https://i.imgur.com/UkzZeNS.jpg",
				"https://i.imgur.com/QQwjANd.jpg",
				"https://i.imgur.com/aZMJdKt.jpg",
				"https://i.imgur.com/dMhUZle.jpg",
				"https://i.imgur.com/afw8w1g.jpg",
				"https://i.imgur.com/FtIB5YX.jpg",
				"https://i.imgur.com/VSoN76h.jpg"
			],
			maps: [
				"https://i.imgur.com/E30dMZd.jpg"
			],
			coords: [
				[481, 293, 1],
				[175, 413, 2],
				[214, 825, 3],
				[429, 346, 4],
				[800, 703, 5],
				[917, 485, 6],
				[780, 533, 7],
				[670, 460, 8],
				[1116, 417, 9],
				[423, 297, 10],
				[259, 288, 11],
				[697, 43, 12],
				[806, 244, 13],
				[833, 264, 14],
				[216, 142, 15],
				[176, 441, 16],
				[892, 342, 17],
				[627, 0, 18],
				[216, 171, 19],
				[311, 78, 20]
			]
		},
		{ // 19 Watchdogs Day 2
			images: [
				"https://i.imgur.com/OGL0Vcb.jpg",
				"https://i.imgur.com/ccQhNBv.jpg",
				"https://i.imgur.com/Fv74X1L.jpg",
				"https://i.imgur.com/0XXsQ4B.jpg",
				"https://i.imgur.com/qNzbpLf.jpg",
				"https://i.imgur.com/wwYegCk.jpg",
				"https://i.imgur.com/n4GLrAr.jpg",
				"https://i.imgur.com/OkewsXX.jpg",
				"https://i.imgur.com/4tt8FeZ.jpg",
				"https://i.imgur.com/pxvIH5o.jpg",
				"https://i.imgur.com/sE3RN6m.jpg",
				"https://i.imgur.com/RKPjrkj.jpg",
				"https://i.imgur.com/elCKRTI.jpg",
				"https://i.imgur.com/3ziH3MF.jpg",
				"https://i.imgur.com/f8bPP57.jpg",
				"https://i.imgur.com/OvI0lFR.jpg",
				"https://i.imgur.com/c2rHaRx.jpg",
				"https://i.imgur.com/SaZ1ZiO.jpg",
				"https://i.imgur.com/OKetG4l.jpg",
				"https://i.imgur.com/PrNhi6p.jpg"
			],
			maps: [
				"https://i.imgur.com/enPmNhj.jpg"
			],
			coords: [
				[410, 138, 1],
				[263, 284, 2],
				[867, 347, 3],
				[981, 751, 4],
				[225, 521, 5],
				[805, 144, 6],
				[928, 426, 7],
				[878, 677, 8],
				[594, 631, 9],
				[717, 675, 10],
				[667, 445, 11],
				[750, 355, 12],
				[453, 748, 13],
				[453, 704, 14],
				[604, 454, 15],
				[639, 417, 16],
				[553, 733, 17],
				[714, 476, 18],
				[747, 418, 19],
				[748, 201, 20]
			]
		},
		{ // 20 Big Bank
			images: [
				"https://i.imgur.com/N34iEjb.jpg",
				"https://i.imgur.com/9SfBR9I.jpg",
				"https://i.imgur.com/ceBvuXu.jpg",
				"https://i.imgur.com/utmglSi.jpg",
				"https://i.imgur.com/XFdIGAP.jpg",
				"https://i.imgur.com/OoGinJD.jpg",
				"https://i.imgur.com/RLbJWAK.jpg",
				"https://i.imgur.com/Ze89ZT6.jpg",
				"https://i.imgur.com/Q1IVT9v.jpg",
				"https://i.imgur.com/jiDakNY.jpg",
				"https://i.imgur.com/Kqhibb9.jpg",
				"https://i.imgur.com/daBkVoo.jpg",
				"https://i.imgur.com/0RaSPQb.jpg",
				"https://i.imgur.com/BjCtV7h.jpg",
				"https://i.imgur.com/jRKtuue.jpg",
				"https://i.imgur.com/tQGPzfo.jpg",
				"https://i.imgur.com/FBhFFBn.jpg",
				"https://i.imgur.com/TqzLwgq.jpg",
				"https://i.imgur.com/riavbV6.jpg",
				"https://i.imgur.com/n0apmck.jpg"
			],
			maps: [
				"https://i.imgur.com/B6s93Ab.png",
				"https://i.imgur.com/oHKppQN.png",
				"https://i.imgur.com/uJvwz7L.png",
				"https://i.imgur.com/SVtz7OR.png",
				"https://i.imgur.com/P0aA2Vl.png"
			],
			coords: [
				[
					[897, 307, 1],
					[625, 581, 2],
					[386, 97, 5],
					[1529, 1488, 11],
					[317, 1322, 12],
					[1451, 1367, 18],
					[869, 612, 19],
					[901, 1457, 20]
				],
				[
					[342, 773, 3],
					[438, 612, 4],
					[381, 272, 10],
					[317, 1190, 14],
					[195, 529, 16],
					[1355, 567, 17]
				],
				[
					[1613, 698, 6],
					[1204, 1431, 15]
				],
				[
					[735, 767, 7],
					[727, 1646, 13]
				],
				[
					[658, 1184, 8],
					[525, 1837, 9]
				]
			]
		},
		{ // 21 Hotline Miami Day 1
			images: [
				"https://i.imgur.com/johxDQr.jpg",
				"https://i.imgur.com/ef2lg0r.jpg",
				"https://i.imgur.com/sQYBR6i.jpg",
				"https://i.imgur.com/7RBHrGz.jpg",
				"https://i.imgur.com/ffH5jJI.jpg",
				"https://i.imgur.com/2BPEOQx.jpg",
				"https://i.imgur.com/IW6md2I.jpg",
				"https://i.imgur.com/IoHajAs.jpg",
				"https://i.imgur.com/HkLkppG.jpg",
				"https://i.imgur.com/T2fOM3q.jpg",
				"https://i.imgur.com/dHcom0w.jpg",
				"https://i.imgur.com/NoGvyWt.jpg",
				"https://i.imgur.com/wakfumd.jpg",
				"https://i.imgur.com/REEPk3N.jpg",
				"https://i.imgur.com/17UboCu.jpg",
				"https://i.imgur.com/bXtQEAS.jpg",
				"https://i.imgur.com/ZEwDbMq.jpg",
				"https://i.imgur.com/pM3NfUX.jpg",
				"https://i.imgur.com/Qq4EQ06.jpg",
				"https://i.imgur.com/b9JjGNt.jpg"
			],
			maps: [
				"https://i.imgur.com/X8advfy.png",
				"https://i.imgur.com/2iIn4dI.png"
			],
			coords: [
				[
					[366, 787, 1],
					[620, 303, 2],
					[1387, 13, 3],
					[1776, 385, 4],
					[1294, 274, 5],
					[1218, 257, 6],
					[1052, 383, 7],
					[1008, 710, 8],
					[506, 571, 11],
					[838, 7, 12],
					[1118, 236, 13],
					[1336, 708, 14],
					[950, 309, 15],
					[909, 600, 16],
					[1613, 403, 19],
					[470, 761, 20]
				],
				[
					[54, 302, 9],
					[315, 439, 10],
					[43, 256, 17],
					[573, 404, 18]
				]
			]
		},
		{ // 22 Hoxton Breakout --
			images: [
				"https://i.imgur.com/FhSsdCu.jpg",
				"https://i.imgur.com/ggNHspX.jpg",
				"https://i.imgur.com/GCcqZVr.jpg",
				"https://i.imgur.com/OtpLFFI.jpg",
				"https://i.imgur.com/W3v1BgI.jpg",
				"https://i.imgur.com/tWiEj0J.jpg",
				"https://i.imgur.com/rvDYdMX.jpg",
				"https://i.imgur.com/3UmPq0g.jpg",
				"https://i.imgur.com/1WcoFQI.jpg",
				"https://i.imgur.com/F8PQTXN.jpg",
				"https://i.imgur.com/OjqhG5y.jpg",
				"https://i.imgur.com/Xumc9Ej.jpg",
				"https://i.imgur.com/BdGTNqV.jpg",
				"https://i.imgur.com/QD1thHZ.jpg",
				"https://i.imgur.com/c3EgUc1.jpg",
				"https://i.imgur.com/0DfH1wO.jpg",
				"https://i.imgur.com/Ui8yT8G.jpg",
				"https://i.imgur.com/GlbLUbM.jpg",
				"https://i.imgur.com/16HEYdQ.jpg"
			]
		},
		{ // 23 Big Oil Day 1
			images: [
				"https://i.imgur.com/MuBJd6N.jpg",
				"https://i.imgur.com/IPwmgat.jpg",
				"https://i.imgur.com/C3oDqam.jpg",
				"https://i.imgur.com/fqdzKKs.jpg",
				"https://i.imgur.com/MO4BZmP.jpg",
				"https://i.imgur.com/BSGHx4D.jpg",
				"https://i.imgur.com/yquQVsQ.jpg",
				"https://i.imgur.com/BmhP7NZ.jpg",
				"https://i.imgur.com/Bku1izb.jpg",
				"https://i.imgur.com/aZkMxPE.jpg",
				"https://i.imgur.com/Wbp82vc.jpg",
				"https://i.imgur.com/4KVAv4q.jpg",
				"https://i.imgur.com/Lz1wrzW.jpg",
				"https://i.imgur.com/Lv8VvVj.jpg",
				"https://i.imgur.com/7cQBK1B.jpg",
				"https://i.imgur.com/tg4LLm6.jpg",
				"https://i.imgur.com/OE30lfo.jpg",
				"https://i.imgur.com/FQaemup.jpg",
				"https://i.imgur.com/0Bhhfc0.jpg",
				"https://i.imgur.com/0zQUpIK.jpg"
			],
			maps: [
				"https://i.imgur.com/tixUEVs.jpg"
			],
			coords: [
				[1136, 523, 1],
				[1084, 94, 2],
				[743, 25, 3],
				[110, 837, 4],
				[644, 788, 5],
				[736, 789, 6],
				[681, 655, 7],
				[723, 504, 8],
				[597, 617, 9],
				[754, 505, 10],
				[1153, 170, 11],
				[1019, 158, 12],
				[597, 589, 13],
				[598, 508, 14],
				[536, 787, 15],
				[764, 654, 16],
				[504, 787, 17],
				[667, 685, 18],
				[511, 654, 19],
				[752, 548, 20]
			]
		},
		{ // 24 Big Oil Day 2
			images: [
				"https://i.imgur.com/zcYVQEQ.jpg",
				"https://i.imgur.com/I1u4846.jpg",
				"https://i.imgur.com/HoTPHdH.jpg",
				"https://i.imgur.com/Lhs9UZO.jpg",
				"https://i.imgur.com/Xgo3KxO.jpg",
				"https://i.imgur.com/TBg9Q3q.jpg",
				"https://i.imgur.com/Hdcpatb.jpg",
				"https://i.imgur.com/HFAKjh7.jpg",
				"https://i.imgur.com/VMDXmNy.jpg",
				"https://i.imgur.com/62IaBy8.jpg",
				"https://i.imgur.com/OxHDkKD.jpg",
				"https://i.imgur.com/gAhZAue.jpg",
				"https://i.imgur.com/SNXJAWU.jpg",
				"https://i.imgur.com/75DcjhW.jpg",
				"https://i.imgur.com/QKsZz3H.jpg",
				"https://i.imgur.com/cHfiabU.jpg",
				"https://i.imgur.com/NG94mWW.jpg",
				"https://i.imgur.com/aATt8MH.jpg",
				"https://i.imgur.com/ojxrhpC.jpg",
				"https://i.imgur.com/uMuiAyq.jpg"
			],
			maps: [
				"https://i.imgur.com/YTs0JKb.png",
				"https://i.imgur.com/nMuEYkf.png"
			],
			coords: [
				[
					[1025, 707, 1],
					[1100, 191, 2],
					[850, 191, 3],
					[805, 342, 4],
					[151, 1219, 5],
					[91, 860, 6],
					[480, 653, 7],
					[398, 689, 8],
					[629, 706, 9],
					[514, 256, 10],
					[1414, 261, 11],
					[884, 499, 12],
					[590, 76, 13],
					[1065, 865, 14],
					[253, 414, 15],
					[1080, 405, 17],
					[239, 192, 18],
					[619, 354, 19],
					[1035, 866, 20]
				],
				[
					[662, 270, 16]
				]
			]
		},
		{ // 25 Election Day Day 1
			images: [
				"https://i.imgur.com/aNxGwZS.jpg",
				"https://i.imgur.com/d7qfr9d.jpg",
				"https://i.imgur.com/1BPa8Du.jpg",
				"https://i.imgur.com/kZP4l2A.jpg",
				"https://i.imgur.com/Iwr8Enk.jpg",
				"https://i.imgur.com/5dPvguj.jpg",
				"https://i.imgur.com/oL0f6tT.jpg",
				"https://i.imgur.com/idIhFHs.jpg",
				"https://i.imgur.com/UNT3fjA.jpg",
				"https://i.imgur.com/WfopD6i.jpg",
				"https://i.imgur.com/9YNoMdK.jpg",
				"https://i.imgur.com/XXbvDmB.jpg",
				"https://i.imgur.com/qWCtF6t.jpg",
				"https://i.imgur.com/qVRs8d5.jpg",
				"https://i.imgur.com/yxYKIBb.jpg",
				"https://i.imgur.com/m3XHLz4.jpg",
				"https://i.imgur.com/WJeh6dc.jpg",
				"https://i.imgur.com/tjnRqkE.jpg",
				"https://i.imgur.com/hdZIkDV.jpg",
				"https://i.imgur.com/XpbnXTS.jpg"
			],
			maps: [
				"https://i.imgur.com/wq2qnzc.jpg"
			],
			coords: [
				[924, 906, 1],
				[561, 429, 2],
				[1010, 647, 3],
				[558, 306, 4],
				[883, 68, 5],
				[933, 50, 6],
				[880, 275, 7],
				[709, 263, 8],
				[814, 68, 9],
				[1074, 99, 10],
				[101, 902, 11],
				[1194, 946, 12],
				[1179, 697, 13],
				[1125, 76, 14],
				[1156, 419, 15],
				[1185, 639, 16],
				[829, 105, 17],
				[546, 335, 18],
				[692, 305, 19],
				[875, 107, 20]
			]
		},
		{ // 26 Election Day Day 2 Warehouse --
			images: [
				"https://i.imgur.com/buQ5dSo.jpg",
				"https://i.imgur.com/ng3lU74.jpg",
				"https://i.imgur.com/g38oDxf.jpg",
				"https://i.imgur.com/RvBfIvW.jpg",
				"https://i.imgur.com/DdYGXtc.jpg",
				"https://i.imgur.com/naVgeQ7.jpg",
				"https://i.imgur.com/3QftzAj.jpg",
				"https://i.imgur.com/4c3NOeU.jpg",
				"https://i.imgur.com/Pq5ZLOS.jpg",
				"https://i.imgur.com/WFHcZ7X.jpg",
				"https://i.imgur.com/itQHdcU.jpg",
				"https://i.imgur.com/AvzJ2bN.jpg",
				"https://i.imgur.com/7329weR.jpg",
				"https://i.imgur.com/58ilZRS.jpg",
				"https://i.imgur.com/8RUYpZ6.jpg",
				"https://i.imgur.com/fr738XU.jpg",
				"https://i.imgur.com/t3pvOcB.jpg",
				"https://i.imgur.com/QQkTOLR.jpg",
				"https://i.imgur.com/EXWnsTz.jpg",
				"https://i.imgur.com/9qK5I6X.jpg"
			]
		},
		{ // 27 Election Day Day 2 Office --
			images: [
				"https://i.imgur.com/PBlAdTi.jpg",
				"https://i.imgur.com/bE8qS8k.jpg",
				"https://i.imgur.com/4eoDHxu.jpg",
				"https://i.imgur.com/j9Bhb0c.jpg",
				"https://i.imgur.com/1ayhN6t.jpg",
				"https://i.imgur.com/iekFEMW.jpg",
				"https://i.imgur.com/GTgdTPd.jpg",
				"https://i.imgur.com/WWFSIAb.jpg",
				"https://i.imgur.com/15pfqqM.jpg",
				"https://i.imgur.com/j4RwpmL.jpg",
				"https://i.imgur.com/7x5lyuz.jpg",
				"https://i.imgur.com/R0VciaL.jpg",
				"https://i.imgur.com/OfmonHa.jpg",
				"https://i.imgur.com/dovxRqB.jpg",
				"https://i.imgur.com/5Pg5RkJ.jpg",
				"https://i.imgur.com/jHCfZpI.jpg",
				"https://i.imgur.com/21nXRBv.jpg",
				"https://i.imgur.com/otceBXM.jpg",
				"https://i.imgur.com/GlY5wQX.jpg",
				"https://i.imgur.com/qKU0q0s.jpg"
			]
		},
		{ // 28 Framing Frame Day 1
			images: [
				"https://i.imgur.com/Dkw8FrJ.jpg",
				"https://i.imgur.com/B6Flzlr.jpg",
				"https://i.imgur.com/sIPhCK0.jpg",
				"https://i.imgur.com/l6tyMwE.jpg",
				"https://i.imgur.com/gdBX1kI.jpg",
				"https://i.imgur.com/HEUl6Fx.jpg",
				"https://i.imgur.com/k41OwG5.jpg",
				"https://i.imgur.com/yb4K4Wb.jpg",
				"https://i.imgur.com/PeDrzze.jpg",
				"https://i.imgur.com/ywzoUdm.jpg",
				"https://i.imgur.com/qmxzMKl.jpg",
				"https://i.imgur.com/LqF1VJA.jpg",
				"https://i.imgur.com/7SIG8Sg.jpg",
				"https://i.imgur.com/VM78Lru.jpg",
				"https://i.imgur.com/kctdITp.jpg",
				"https://i.imgur.com/9hfsFkF.jpg",
				"https://i.imgur.com/CChDkdr.jpg",
				"https://i.imgur.com/RNjjEzw.jpg",
				"https://i.imgur.com/3pZFTRc.jpg",
				"https://i.imgur.com/dVgaAmo.jpg"
			],
			maps: [
				"https://i.imgur.com/SLDVBtu.png",
				"https://i.imgur.com/5mr1lRm.png"
			],
			coords: [
				[
					[903, 619, 1],
					[638, 597, 2],
					[362, 616, 3],
					[274, 718, 4],
					[389, 464, 5],
					[322, 395, 6],
					[507, 287, 9],
					[666, 223, 10],
					[691, 490, 11],
					[518, 580, 12],
					[518, 541, 13],
					[945, 405, 16],
					[723, 618, 18],
					[777, 395, 19],
					[402, 492, 20]
				],
				[
					[624, 798, 7],
					[856, 674, 8],
					[593, 458, 14],
					[462, 667, 15],
					[521, 527, 17]
				],
			]
		},
		{ // 29 Framing Frame Day 2 --
			images: [
				"https://i.imgur.com/lUCOT3m.jpg",
				"https://i.imgur.com/yEVm460.jpg",
				"https://i.imgur.com/nzwgdHe.jpg",
				"https://i.imgur.com/usR8CRd.jpg",
				"https://i.imgur.com/OHjdnw5.jpg",
				"https://i.imgur.com/Ymrp6sZ.jpg",
				"https://i.imgur.com/CDlZngU.jpg",
				"https://i.imgur.com/30wkZVc.jpg",
				"https://i.imgur.com/KnCoCln.jpg",
				"https://i.imgur.com/nAH4h9s.jpg",
				"https://i.imgur.com/xn2ohA3.jpg",
				"https://i.imgur.com/ddG9HBo.jpg",
				"https://i.imgur.com/nrq9IwB.jpg",
				"https://i.imgur.com/TbQTosI.jpg",
				"https://i.imgur.com/5M1yVNV.jpg",
				"https://i.imgur.com/Y7TMItg.jpg",
				"https://i.imgur.com/aB34qNh.jpg",
				"https://i.imgur.com/yefRGZY.jpg",
				"https://i.imgur.com/Jt5lEAZ.jpg",
				"https://i.imgur.com/eAKMJ92.jpg"
			]
		},
		{ // 30 Framing Frame Day 3
			images: [
				"https://i.imgur.com/WtUnaOQ.jpg",
				"https://i.imgur.com/hR0FGpd.jpg",
				"https://i.imgur.com/nue1nYr.jpg",
				"https://i.imgur.com/mQ4ThgV.jpg",
				"https://i.imgur.com/L55RaXx.jpg",
				"https://i.imgur.com/rVjjMmN.jpg",
				"https://i.imgur.com/7hhLmgu.jpg",
				"https://i.imgur.com/Hvzrn3o.jpg",
				"https://i.imgur.com/ABkv8Id.jpg",
				"https://i.imgur.com/P9DzL5y.jpg",
				"https://i.imgur.com/HJKEyQs.jpg",
				"https://i.imgur.com/cmrUuQR.jpg",
				"https://i.imgur.com/B0B50X2.jpg",
				"https://i.imgur.com/vZnJvTa.jpg",
				"https://i.imgur.com/590oT7o.jpg",
				"https://i.imgur.com/YivUIHn.jpg",
				"https://i.imgur.com/Ba5T141.jpg",
				"https://i.imgur.com/74cevgy.jpg",
				"https://i.imgur.com/PitqSCK.jpg",
				"https://i.imgur.com/iE9RwHN.jpg"
			],
			maps: [
				"https://i.imgur.com/tnzUons.png",
				"https://i.imgur.com/Qrz9TVl.png",
				"https://i.imgur.com/txwjavV.png"
			],
			coords: [
				[
					[71, 53, 2],
					[425, 65, 3],
					[550, 166, 4],
					[514, 317, 5],
					[421, 326, 6],
					[339, 244, 7],
					[358, 106, 12],
					[386, 114, 13],
					[31, 21, 18]
				],
				[
					[225, 429, 8],
					[665, 200, 14],
					[670, 134, 16],
					[442, 86, 17]
				],
				[
					[44, 391, 1],
					[162, 247, 9],
					[470, 219, 10],
					[688, 291, 11],
					[571, 459, 15],
					[239, 354, 19],
					[88, 98, 20]
				]
			]
		},
		{ // 31 Four Stores --
			images: [
				"https://i.imgur.com/gycM7Q8.jpg",
				"https://i.imgur.com/N9DsG2M.jpg",
				"https://i.imgur.com/neAMBBh.jpg",
				"https://i.imgur.com/8UpoBgu.jpg",
				"https://i.imgur.com/IfOTZy3.jpg",
				"https://i.imgur.com/SfODqg6.jpg",
				"https://i.imgur.com/zaxShRa.jpg",
				"https://i.imgur.com/9wpX1z8.jpg",
				"https://i.imgur.com/VoptPM3.jpg",
				"https://i.imgur.com/TStjTzW.jpg",
				"https://i.imgur.com/Esx9g63.jpg",
				"https://i.imgur.com/F3afccA.jpg",
				"https://i.imgur.com/l8ygvo5.jpg",
				"https://i.imgur.com/ZeZczNm.jpg",
				"https://i.imgur.com/vIRij1c.jpg",
				"https://i.imgur.com/fMgm3DI.jpg",
				"https://i.imgur.com/abUlHe3.jpg",
				"https://i.imgur.com/som336w.jpg",
				"https://i.imgur.com/4XkbAb7.jpg",
				"https://i.imgur.com/aXBcxFh.jpg"
			]
		},
		{ // 32 Mallcrasher --
			images: [
				"https://i.imgur.com/Ky37Dze.jpg",
				"https://i.imgur.com/46RstVp.jpg",
				"https://i.imgur.com/IS93Kfu.jpg",
				"https://i.imgur.com/sTK58Y7.jpg",
				"https://i.imgur.com/QgsivLL.jpg",
				"https://i.imgur.com/yEFEhpz.jpg",
				"https://i.imgur.com/hHzg9Yk.jpg",
				"https://i.imgur.com/hjjtDWp.jpg",
				"https://i.imgur.com/TgEa8P2.jpg",
				"https://i.imgur.com/nIspYGT.jpg",
				"https://i.imgur.com/TH91MSW.jpg",
				"https://i.imgur.com/5dkWgHm.jpg",
				"https://i.imgur.com/xxWJx32.jpg",
				"https://i.imgur.com/OqoqJx4.jpg",
				"https://i.imgur.com/8zJnlNj.jpg",
				"https://i.imgur.com/eAYT1QV.jpg",
				"https://i.imgur.com/8D5WdfT.jpg",
				"https://i.imgur.com/xrrDuzY.jpg"
			]
		},
		{ // 33 Nightclub --
			images: [
				"https://i.imgur.com/Mim2zTS.jpg",
				"https://i.imgur.com/VFVZLZJ.jpg",
				"https://i.imgur.com/bnlyCxi.jpg",
				"https://i.imgur.com/f1fNzk4.jpg",
				"https://i.imgur.com/O1GmTnP.jpg",
				"https://i.imgur.com/uFYoi7y.jpg",
				"https://i.imgur.com/0W4tXyv.jpg",
				"https://i.imgur.com/htAsg3b.jpg",
				"https://i.imgur.com/nlmYhbq.jpg",
				"https://i.imgur.com/rrSTjZr.jpg",
				"https://i.imgur.com/SwKwubN.jpg",
				"https://i.imgur.com/nEZbMw0.jpg",
				"https://i.imgur.com/YhuB6oJ.jpg",
				"https://i.imgur.com/gvOTwJF.jpg",
				"https://i.imgur.com/nlazsyO.jpg",
				"https://i.imgur.com/WptOC6x.jpg",
				"https://i.imgur.com/S6iN25S.jpg",
				"https://i.imgur.com/URMjs41.jpg",
				"https://i.imgur.com/BOD8DRH.jpg",
				"https://i.imgur.com/hYR6PJw.jpg"
			]
		},
		{ // 34 Ukrainian Job --
			images: [
				"https://i.imgur.com/QXlre9w.jpg",
				"https://i.imgur.com/NNx2sYU.jpg",
				"https://i.imgur.com/RMQxmKB.jpg",
				"https://i.imgur.com/UPplJJs.jpg",
				"https://i.imgur.com/lFsV5Gv.jpg",
				"https://i.imgur.com/etlRLWR.jpg",
				"https://i.imgur.com/L5xCnIX.jpg",
				"https://i.imgur.com/1Bjo8lh.jpg",
				"https://i.imgur.com/n7uhUdM.jpg",
				"https://i.imgur.com/x6tlGE7.jpg",
				"https://i.imgur.com/xJ6X5zv.jpg",
				"https://i.imgur.com/mZjHTTv.jpg",
				"https://i.imgur.com/n6lT5yB.jpg",
				"https://i.imgur.com/mJlkXjV.jpg",
				"https://i.imgur.com/Dkac3VH.jpg",
				"https://i.imgur.com/8LXaXOj.jpg",
				"https://i.imgur.com/8wdZp4V.jpg"
			]
		},
		{ // 35 Overpass Escape
			images: [
				"https://i.imgur.com/MU9Sirp.jpg",
				"https://i.imgur.com/6g3javE.jpg",
				"https://i.imgur.com/5w6yKyA.jpg",
				"https://i.imgur.com/RKRiXPO.jpg",
				"https://i.imgur.com/6z6zxwU.jpg",
				"https://i.imgur.com/KyCLy5N.jpg",
				"https://i.imgur.com/orHQVHe.jpg",
				"https://i.imgur.com/PXQzMuB.jpg",
				"https://i.imgur.com/akiIoZi.jpg",
				"https://i.imgur.com/hare65f.jpg",
				"https://i.imgur.com/kb2vPXz.jpg",
				"https://i.imgur.com/e7c1fjC.jpg",
				"https://i.imgur.com/kZi0sIl.jpg",
				"https://i.imgur.com/VfOYYVq.jpg",
				"https://i.imgur.com/4CaHa3B.jpg",
				"https://i.imgur.com/UzD9s3m.jpg",
				"https://i.imgur.com/nXj0eHs.jpg",
				"https://i.imgur.com/vxXfoGQ.jpg"
			],
			maps: [
				"https://i.imgur.com/tj6HCL0.jpg"
			],
			coords: [
				[543, 268, 1],
				[750, 314, 2],
				[778, 723, 3],
				[950, 642, 4],
				[1240, 594, 5],
				[159, 587, 6],
				[346, 441, 7],
				[387, 220, 8],
				[400, 688, 9],
				[397, 725, 10],
				[681, 407, 11],
				[470, 277, 12],
				[828, 591, 13],
				[295, 905, 14],
				[361, 712, 15],
				[475, 797, 16],
				[35, 239, 17],
				[489, 76, 18]
			]
		},
		{ // 36 Park Escape
			images: [
				"https://i.imgur.com/IJneq4p.jpg",
				"https://i.imgur.com/HXYbdCe.jpg",
				"https://i.imgur.com/JujOveJ.jpg",
				"https://i.imgur.com/jJnd2Z2.jpg",
				"https://i.imgur.com/nnWr7og.jpg",
				"https://i.imgur.com/sUhhfRh.jpg",
				"https://i.imgur.com/urr4LRj.jpg",
				"https://i.imgur.com/WhyOVMr.jpg",
				"https://i.imgur.com/avguWKX.jpg",
				"https://i.imgur.com/Xe2gPuG.jpg",
				"https://i.imgur.com/HW8qvDE.jpg",
				"https://i.imgur.com/0aKGQno.jpg",
				"https://i.imgur.com/lVsF0zc.jpg",
				"https://i.imgur.com/OYWWyaX.jpg",
				"https://i.imgur.com/EKiyo67.jpg",
				"https://i.imgur.com/LnHOrLB.jpg",
				"https://i.imgur.com/IjI6L2R.jpg",
				"https://i.imgur.com/1ijctwW.jpg",
				"https://i.imgur.com/uxyvEET.jpg"
			],
			maps: [
				"https://i.imgur.com/fszDhXE.jpg"
			],
			coords: [
				[703, 887, 1],
				[30, 486, 2],
				[107, 217, 3],
				[706, 31, 4],
				[450, 540, 5],
				[503, 622, 6],
				[1090, 681, 7],
				[1186, 257, 8],
				[1116, 464, 9],
				[934, 362, 10],
				[591, 551, 11],
				[665, 485, 12],
				[935, 494, 13],
				[662, 372, 14],
				[693, 388, 15],
				[1111, 395, 16],
				[971, 679, 17],
				[499, 270, 18],
				[868, 585, 19]
			]
		},
		{ // 37 Street Escape
			images: [
				"https://i.imgur.com/Vun7Woy.jpg",
				"https://i.imgur.com/D4o0EZx.jpg",
				"https://i.imgur.com/357rCsS.jpg",
				"https://i.imgur.com/0dgL3XS.jpg",
				"https://i.imgur.com/b2rSUEt.jpg",
				"https://i.imgur.com/slwh7os.jpg",
				"https://i.imgur.com/8nhkwf3.jpg",
				"https://i.imgur.com/ozuGV42.jpg",
				"https://i.imgur.com/24jubBH.jpg",
				"https://i.imgur.com/lkJ20Ua.jpg",
				"https://i.imgur.com/7ZfD0WM.jpg",
				"https://i.imgur.com/YvIcMbI.jpg",
				"https://i.imgur.com/4noQuyp.jpg",
				"https://i.imgur.com/LKMKjvg.jpg",
				"https://i.imgur.com/O17bUTr.jpg",
				"https://i.imgur.com/dIKQQEQ.jpg",
				"https://i.imgur.com/4Bjqjza.jpg",
				"https://i.imgur.com/dJ6n1S6.jpg",
				"https://i.imgur.com/yh8gX31.jpg",
				"https://i.imgur.com/c9t305Y.jpg"
			],
			maps: [
				"https://i.imgur.com/W4vUkZY.jpg"
			],
			coords: [
				[372, 228, 1],
				[379, 62, 2],
				[757, 377, 3],
				[749, 658, 4],
				[511, 345, 5],
				[431, 502, 6],
				[985, 707, 7],
				[1008, 680, 8],
				[1070, 323, 9],
				[588, 417, 10],
				[476, 228, 11],
				[929, 228, 12],
				[1214, 540, 13],
				[431, 337, 14],
				[384, 396, 15],
				[505, 228, 16],
				[558, 294, 17],
				[395, 699, 18],
				[591, 331, 19],
				[70, 652, 20]
			]
		},
		{ // 38 Hotline Miami Day 2
			images: [
				"https://i.imgur.com/ANkdJ80.jpg",
				"https://i.imgur.com/SiHd3oZ.jpg",
				"https://i.imgur.com/QU0JVVX.jpg",
				"https://i.imgur.com/bgRiIcj.jpg",
				"https://i.imgur.com/L4KxQ8v.jpg",
				"https://i.imgur.com/hZcL7K4.jpg",
				"https://i.imgur.com/0PzIyoo.jpg",
				"https://i.imgur.com/I60OqSu.jpg",
				"https://i.imgur.com/hdlb8bW.jpg",
				"https://i.imgur.com/A2qMdoA.jpg",
				"https://i.imgur.com/oYijK43.jpg",
				"https://i.imgur.com/nYO3O9x.jpg",
				"https://i.imgur.com/l1XKDle.jpg",
				"https://i.imgur.com/2GQyDgM.jpg",
				"https://i.imgur.com/DdFWkFU.jpg",
				"https://i.imgur.com/xbDVggX.jpg",
				"https://i.imgur.com/LHHhLJe.jpg",
				"https://i.imgur.com/wFKAKPB.jpg",
				"https://i.imgur.com/ZMRjqOA.jpg",
				"https://i.imgur.com/wrHnDXJ.jpg",
				"https://i.imgur.com/ojlfMio.jpg",
				"https://i.imgur.com/Z57w1tM.jpg",
				"https://i.imgur.com/Ql79Qbj.jpg"
			]
		},
		{ // 39 White Xmas --
			images: [
				"https://i.imgur.com/QyhRGTH.jpg",
				"https://i.imgur.com/tbsQOEk.jpg",
				"https://i.imgur.com/S6o1dIg.jpg",
				"https://i.imgur.com/4QBRMPE.jpg",
				"https://i.imgur.com/jb4OjeI.jpg",
				"https://i.imgur.com/Gr5vNU1.jpg",
				"https://i.imgur.com/MnRAJaH.jpg",
				"https://i.imgur.com/OpBllD3.jpg",
				"https://i.imgur.com/LIwf1YC.jpg",
				"https://i.imgur.com/CY3R4H1.jpg",
				"https://i.imgur.com/VIs2WKO.jpg",
				"https://i.imgur.com/tupYFIy.jpg",
				"https://i.imgur.com/QlvfBWE.jpg",
				"https://i.imgur.com/gvtMZMy.jpg",
				"https://i.imgur.com/axxIpVN.jpg",
				"https://i.imgur.com/DFeS6W6.jpg",
				"https://i.imgur.com/jakKWJf.jpg",
				"https://i.imgur.com/uX2wiia.jpg",
				"https://i.imgur.com/4MnguDf.jpg",
				"https://i.imgur.com/X2s4YLD.jpg"
			]
		},
		{ // 40 The Diamond
			images: [
				"https://i.imgur.com/dIj2eRK.jpg",
				"https://i.imgur.com/4nm36tV.jpg",
				"https://i.imgur.com/qHpGJXD.jpg",
				"https://i.imgur.com/HHjW86R.jpg",
				"https://i.imgur.com/l9reMt3.jpg",
				"https://i.imgur.com/TkJYKaU.jpg",
				"https://i.imgur.com/G5BnUzu.jpg",
				"https://i.imgur.com/7SvUloj.jpg",
				"https://i.imgur.com/PJkeAKB.jpg",
				"https://i.imgur.com/dGEos0c.jpg",
				"https://i.imgur.com/fQNbd3m.jpg",
				"https://i.imgur.com/RppfYKh.jpg",
				"https://i.imgur.com/GZ8z2Sl.jpg",
				"https://i.imgur.com/ZcCNFfp.jpg",
				"https://i.imgur.com/Bj3W1sC.jpg",
				"https://i.imgur.com/ellhzs0.jpg",
				"https://i.imgur.com/teDrw3B.jpg",
				"https://i.imgur.com/zI6X1iN.jpg",
				"https://i.imgur.com/lIxrfFq.jpg",
				"https://i.imgur.com/PJfWcGi.jpg"
			],
			maps: [
				"https://i.imgur.com/cSr8zbb.png",
				"https://i.imgur.com/OhGA7b7.png",
				"https://i.imgur.com/kAvrGCF.png"
			],
			coords: [
				[
					[527, 430, 1],
					[551, 772, 2],
					[707, 1190, 3],
					[253, 873, 12],
					[353, 1048, 13],
					[676, 1155, 14],
					[304, 615, 16],
					[605, 1046, 17],
					[444, 839, 19]
				],
				[
					[191, 367, 8],
					[226, 327, 9],
					[649, 498, 10],
					[650, 365, 11],
					[651, 392, 20]
				],
				[
					[451, 169, 4],
					[756, 215, 5],
					[290, 223, 6],
					[232, 222, 7],
					[531, 198, 15],
					[162, 238, 18]
				]
			]
		},
		{ // 41 The Bomb: Forest --
			images: [
				"https://i.imgur.com/zTRUGhu.jpg",
				"https://i.imgur.com/FJIA124.jpg",
				"https://i.imgur.com/GRdB3cM.jpg",
				"https://i.imgur.com/Dg1Jfu8.jpg",
				"https://i.imgur.com/SWkIWpr.jpg",
				"https://i.imgur.com/qX2iFq0.jpg",
				"https://i.imgur.com/VD9Tq2R.jpg",
				"https://i.imgur.com/1p08HmH.jpg",
				"https://i.imgur.com/cXsJDj4.jpg",
				"https://i.imgur.com/yn8L6Bs.jpg",
				"https://i.imgur.com/W2Ofb8F.jpg",
				"https://i.imgur.com/CSfM35L.jpg",
				"https://i.imgur.com/INAunkt.jpg",
				"https://i.imgur.com/8r2ACyd.jpg",
				"https://i.imgur.com/ZxrtA7x.jpg",
				"https://i.imgur.com/9O6NXDx.jpg",
				"https://i.imgur.com/lxPj2Cr.jpg",
				"https://i.imgur.com/uSyCaO8.jpg",
				"https://i.imgur.com/vlY3DRr.jpg",
				"https://i.imgur.com/Tm5X6fU.jpg",
				"https://i.imgur.com/XfwQXOi.jpg"
			],
			maps: [
			
			],
			coords: [
				
			]
		},
		{ // 42 The Bomb: Dockyard
			images: [
				"https://i.imgur.com/ZZw3z2B.jpg",
				"https://i.imgur.com/aRS0t6U.jpg",
				"https://i.imgur.com/DSHQrSq.jpg",
				"https://i.imgur.com/W4WegTv.jpg",
				"https://i.imgur.com/blPjZ0M.jpg",
				"https://i.imgur.com/aa2Qn7J.jpg",
				"https://i.imgur.com/zZ1cApv.jpg",
				"https://i.imgur.com/zdnwQTe.jpg",
				"https://i.imgur.com/4x0izD3.jpg",
				"https://i.imgur.com/xdaueTG.jpg",
				"https://i.imgur.com/fn2qPho.jpg",
				"https://i.imgur.com/UDnzAXd.jpg",
				"https://i.imgur.com/4rSPhyL.jpg",
				"https://i.imgur.com/jTVle8n.jpg",
				"https://i.imgur.com/kc2YF7R.jpg",
				"https://i.imgur.com/QqMX5sY.jpg",
				"https://i.imgur.com/AmLpdAU.jpg",
				"https://i.imgur.com/FlvY1kR.jpg",
				"https://i.imgur.com/uDAfWuc.jpg",
				"https://i.imgur.com/scsTQVf.jpg",
				"https://i.imgur.com/iz43mjf.jpg",
				"https://i.imgur.com/jcUHekr.jpg",
				"https://i.imgur.com/0oyyFrY.jpg",
				"https://i.imgur.com/A8guLmQ.jpg",
				"https://i.imgur.com/PMzNJze.jpg",
				"https://i.imgur.com/wgu85YG.jpg",
				"https://i.imgur.com/t69b2hU.jpg",
				"https://i.imgur.com/5qVHc07.jpg",
				"https://i.imgur.com/ZBm2SoH.jpg"
			],
			maps: [
				"https://i.imgur.com/wLuay9N.png"
			],
			coords: [
				[1525, 1456, 1],
				[1598, 710, 2],
				[1486, 1206, 3],
				[721, 1135, 4],
				[522, 1070, 5],
				[259, 1200, 6],
				[372, 1058, 7],
				[51, 878, 8],
				[1368, 929, 9],
				[1370, 1236, 10],
				[1016, 1526, 11],
				[1363, 1164, 12],
				[284, 323, 13],
				[208, 179, 14],
				[1327, 1168, 15],
				[392, 1532, 16],
				[274, 1151, 17],
				[88, 626, 18],
				[1620, 1303, 19],
				[1554, 895, 20],
				[1480, 1295, 21],
				[1093, 721, 22],
				[1064, 908, 23],
				[451, 1279, 24],
				[276, 1408, 25],
				[258, 1259, 26],
				[1509, 1396, 27],
				[379, 1286, 28],
				[216, 1003, 29]
			]
		},
		{ // 43 Car Shop
			images: [
				"https://i.imgur.com/YGL2Dwu.jpg",
				"https://i.imgur.com/ZL8gvDf.jpg",
				"https://i.imgur.com/Skvenq9.jpg",
				"https://i.imgur.com/fByANmr.jpg",
				"https://i.imgur.com/yl1m5CC.jpg",
				"https://i.imgur.com/nYorQqd.jpg",
				"https://i.imgur.com/a8tRA7a.jpg",
				"https://i.imgur.com/nzLRJ5D.jpg",
				"https://i.imgur.com/OjhNzcC.jpg",
				"https://i.imgur.com/CS8GkJp.jpg",
				"https://i.imgur.com/0TmAffG.jpg",
				"https://i.imgur.com/HPCLL0Z.jpg",
				"https://i.imgur.com/F9fUnUf.jpg",
				"https://i.imgur.com/6JCtyoc.jpg",
				"https://i.imgur.com/FacQdkj.jpg",
				"https://i.imgur.com/FmqT9rm.jpg",
				"https://i.imgur.com/AwqcpA5.jpg",
				"https://i.imgur.com/7AzFXux.jpg",
				"https://i.imgur.com/cCMojxC.jpg",
				"https://i.imgur.com/HMHQncs.jpg"
			]
		},
	];
	$("nav li").each(function()
	{
		var t = $(this);
		if (t.find("> ul").length)
		{
			var el = t,
				s = t.find("> span");
			if (s.length)
				el = s;
			el.click(function(e)
			{
				e.stopPropagation();
				if (!$("nav").hasClass("small"))
					return;
				var t = $(this);
				if (t.is("span"))
					t = t.parent();
				t.find("> ul").toggle();
			});
		}
	});
	$("li[data-map]").click(function()
	{
		$("nav").addClass("small");
		var p = $(this).parent();
		while (!p.is("nav > ul > li"))
		{
			if (p.is("ul"))
				p.show();
			p = p.parent();
		}
		$("nav .selected").removeClass("selected");
		$(this).addClass("selected");
		var i = $(this).attr("data-map"),
			data = imgData[i],
			imgs = [],
			tdiv = $("#thumbnail > div"),
			images = data.images,
			html = "<ul>";
		tdiv.mThumbnailScroller("destroy");
		tdiv.empty();
		if (data.maps)
			images = data.maps.concat(images);
		$.each(images, function(j)
		{
			var img = new Image();
			img.src = this.replace(".jpg", "s.jpg");
			img.onload = $.proxy(function(i, j)
			{
				var img = $("#thumbnail img[data-img='"+j+"']");
				img.attr("src", this.src);
				if (j == 0)
				{
					$(this).showImg(i);
					img.addClass("selected");
				}
			}, img, i, j);
			html += '<li class="mTSThumbContainer"><img src="x.png" data-img="'+j+'" /></li>';
		});
		html += "</ul>";
		tdiv.html(html);
		tdiv.mThumbnailScroller({
			axis: "x",
			type: "hover-80"
		});
		tdiv.find("img").on("click", {
			i: $(this).attr("data-map")
		}, function(e)
		{
			$(this).showImg(e.data.i);
			$("#thumbnail img.selected").removeClass("selected");
			$(this).addClass("selected");
		});
	});
	$.fn.showImg = function(i)
	{
		var src = $(this).attr("src").replace("s.jpg", ".jpg"),
			img = new Image();
		img.src = src;
		img.onload = $.proxy(function(i)
		{
			var src = $(this).attr("src"),
				idx = $.inArray(src, imgData[i].maps),
				html = '<img src="'+src+'" />',
				idiv = $("#panzoom").empty();
			if (idx != -1)
			{
				var coords = imgData[i].maps.length > 1 ? imgData[i].coords[idx] : imgData[i].coords;
				$.each(coords, function()
				{
					html += '<div class="area" style="left: '+this[0]+'px; top: '+this[1]+'px;" data-img="'+(this[2]-1+imgData[i].maps.length)+'"></div>';
				});
			}
			var w = idiv.parent().width()/this.naturalWidth,
				h = idiv.parent().height()/this.naturalHeight,
				scale = w > h ? w : h;
			idiv.html(html);
			idiv.width(this.naturalWidth);
			idiv.height(this.naturalHeight);
			if (idiv.data("__pz__"))
				idiv.panzoom("destroy");
			var pz = idiv.panzoom({
				increment: 0.1,
				contain: "invert",
				easing: "linear",
				minScale: scale,
				maxScale: 2,
				startTransform: "scale("+scale+")"
			});
			pz.panzoom("pan", 0, 0, {
				matrix: pz.panzoom("getMatrix"),
				animate: "skip"
			});
			pz.parent().unbind("mousewheel.focal").on("mousewheel.focal", function(e)
			{
				e.preventDefault();
				var delta = e.delta || e.originalEvent.wheelDelta,
					zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
				pz.panzoom("zoom", zoomOut, {
					increment: 0.1,
					focal: e
				});
			});
			$(".area").on("click", function()
			{
				$("#thumbnail img[data-img='"+$(this).attr("data-img")+"']").trigger("click");
			});
		}, img, i);
	};
});