import { registerEnumType } from '@nestjs/graphql';

export enum WatchCategory {
    MEN = 'Men',
    WOMEN = 'Women',
    UNISEX = 'Unisex',
}
registerEnumType(WatchCategory, {
	name: 'WatchCategory',
});

export enum WatchStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(WatchStatus, {
	name: 'WatchStatus',
});

export enum WatchBrand {
    ROLEX = 'ROLEX',
    PATEK_PHILIPPE = 'PATEK_PHILIPPE',
    AUDEMARS_PIGUET = 'AUDEMARS_PIGUET',
    OMEGA = 'OMEGA',
    TAG_HEUER = 'TAG_HEUER',
    BREITLING = 'BREITLING',
    CARTIER = 'CARTIER',
    TUDOR = 'TUDOR',
    IWC_SCHAFFHAUSEN = 'IWC_SCHAFFHAUSEN',
    JAEGER_LECOULTRE = 'JAEGER_LECOULTRE',
    PANERAI = 'PANERAI',
    LONGINES = 'LONGINES',
    VACHERON_CONSTANTIN = 'VACHERON_CONSTANTIN',
    HUBLOT = 'HUBLOT',
    SEIKO = 'SEIKO',
    RICHARD_MILLE = 'RICHARD_MILLE',
    BLANCPAIN = 'BLANCPAIN',
    ZENITH = 'ZENITH',
    BREGUET = 'BREGUET',
    GIRARD_PERREGAUX = 'GIRARD_PERREGAUX',
  }
  
  registerEnumType(WatchBrand, {
    name: 'WatchBrand',
  });
  
export enum WatchLocation {
	SEOUL = 'SEOUL',
	BUSAN = 'BUSAN',
	INCHEON = 'INCHEON',
	DAEGU = 'DAEGU',
	GYEONGJU = 'GYEONGJU',
	GWANGJU = 'GWANGJU',
	CHONJU = 'CHONJU',
	DAEJON = 'DAEJON',
	JEJU = 'JEJU',
}
registerEnumType(WatchLocation, {
	name: 'PropertyLocation',
});