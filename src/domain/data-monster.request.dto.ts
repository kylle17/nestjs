import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class DataMonsterRequestDto {
    
    @IsString()
    @IsNotEmpty()
    title : String;

    @IsString()
    @IsNotEmpty()
    explain : String;

    @IsString()
    @IsNotEmpty()
    sourceCode : String;

    @IsString()
    @IsNotEmpty()
    languageType : String;

}