//Zombie
npc9277=new Character('Zombie', 'npc')
npc9277.setInit(3)
npc9277.setInitBonus(0)
npc9277.setHd(2)
npc9277.setAC(8)
npc9277.setMaxHp(7)
npc9277.setCurHp(7)
npc9277.addRoll('Claw or Bite', '1d8+0')
npc9277.putAt('445px', '212px')
add(npc9277)
//End of Zombie

//Quail
pc2539=new Character('Quail', 'pc')
pc2539.setInit(2)
pc2539.setInitBonus(0)
pc2539.setHd(4)
pc2539.setAC(4)
pc2539.setMaxHp(19)
pc2539.setCurHp(19)
pc2539.addRoll('Cure Light Wounds x2', '1d8+0')
pc2539.addRoll('Hold Person x2', '1d20+0')
pc2539.addRoll('Mace', '1d20+0')
pc2539.addRoll('Mace+Spiritual Hammer Damage', '1d6+1')
pc2539.putAt('235px', '141px')
add(pc2539)
//End of Quail