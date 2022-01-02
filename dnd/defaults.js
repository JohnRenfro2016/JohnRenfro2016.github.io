//Zombie 1
pc9383=new Character('Zombie 1')
pc9383.setAC(8)
pc9383.setCurHp(7)
pc9383.setInit(3)
pc9383.setInitBonus(0)
pc9383.setHd(2)
pc9383.setMaxHp(7)
pc9383.setMiniature('Zombie.png')
pc9383.addRoll('Claw or Bite', '1d8+0')
pc9383.addRoll('Claw or Bite Attack need 12 to hit Quail', '1d20+0')
pc9383.putAt('438px', '92px')
add(pc9383)
//End of Zombie 1

//Quail
pc5029=new Character('Quail')
pc5029.setAC(4)
pc5029.setCurHp(19)
pc5029.setInit(2)
pc5029.setInitBonus(0)
pc5029.setHd(4)
pc5029.setMaxHp(19)
pc5029.setMiniature('Cleric.png')
pc5029.addRoll('Cure Light Wounds x2', '1d8+0')
pc5029.addRoll('Mace+Spiritual Hammer Damage', '1d6+1')
pc5029.addRoll('Mace Attack need a 10 to hit Zombie', '1d20+0')
pc5029.putAt('285px', '103px')
add(pc5029)
//End of Quail

//Zombie 2
pc7389=new Character('Zombie 2')
pc7389.setAC(8)
pc7389.setCurHp(7)
pc7389.setInitBonus(0)
pc7389.setHd(2)
pc7389.setMaxHp(7)
pc7389.setMiniature('Zombie.png')
pc7389.addRoll('Claw or Bite', '1d8+0')
pc7389.addRoll('Claw or Bite Attack need 12 to hit Quail', '1d20+0')
pc7389.putAt('594px', '103px')
add(pc7389)
//End of Zombie 2