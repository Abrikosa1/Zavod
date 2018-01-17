/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zavod.mappers;

import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import zavod.model.News;
import org.codehaus.jackson.map.ObjectMapper;


public class JsonNewsMapper {
     public static String toJSON(News news)
    {
        try {
            ObjectMapper mapper = new ObjectMapper();
            String json=mapper.writeValueAsString(news);
            return json;
        } catch (IOException ex) {
            Logger.getLogger(JsonNewsMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
    
     public static String toJSON(List<News> news)  {
        try {
            ObjectMapper mapper = new ObjectMapper();
            String json=mapper.writeValueAsString(news);
            return json;
        } catch (IOException ex) {
            Logger.getLogger(JsonNewsMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
    
    
    public static News fromJSON(String json)  {
        try {
            ObjectMapper mapper = new ObjectMapper();
            News news =mapper.readValue(json, News.class);
            return news;
        } catch (IOException ex) {
            Logger.getLogger(JsonNewsMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
}
