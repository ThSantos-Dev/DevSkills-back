import QuestionModel from "../../models/Questions/QuestionsModel";
import { Question } from "../../interfaces/Test/Tests";
import ReturnMessages from "../../../config/ReturnMessages";
import TestModel from "../../models/Test/TestModel";
 
 
export default class QuestionService {
   static async createQuestion (question: Question, id_prova: number) {
 
       if(question.enunciado, question.id_tipo){
               const createQuestion = {
                   enunciado: question.enunciado,
                   id_tipo: question.id_tipo,
                   img_url: question.img_url
                   }
 
                   const questao = await QuestionModel.createTestQuestion(createQuestion)
                   const findTypeQuestion = await TestModel.FindTypeQuestion(question.id_tipo)
                   const questaoID = questao.id

                   try {
                        await TestModel.relateTestQuestion(id_prova, questaoID)
                   } catch (error) {
                       console.log(error)
                   }
 
                   if (findTypeQuestion) {
              
                       if(findTypeQuestion.tipo === "MULTIPLA ESCOLHA" || findTypeQuestion.tipo === "UNICA ESCOLHA" ){
                           try {
                               question.alternativas?.forEach(async Option => {
                                   await QuestionModel.createTestOption(Option.correta, Option.texto, questao.id)
                           })
          
                           } catch (error: any) {
                               console.error(error)
                           }   
                       }  else{
                           return ReturnMessages.Success
                       }

                   
 
                   }
 
           return ReturnMessages.Success
       }
   }
}
